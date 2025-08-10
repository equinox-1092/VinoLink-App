import React from "react";

export type ImagePreview = {
  id: string;
  url: string;
  file: File;
};

type UseImagePreviewOptions = {
  maxFiles?: number;
  accept?: string;
  generateId?: () => string;
};

export function useImagePreview(opts: UseImagePreviewOptions = {}) {
  const {
    maxFiles = Infinity,
    accept = "image/*",
    generateId = () =>
      crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2, 9),
  } = opts;

  const [previewImages, setPreviewImages] = React.useState<ImagePreview[]>([]);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const urlsRef = React.useRef<Set<string>>(new Set());

  const handleFileInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const filesArr = Array.from(files);
      const allowed = filesArr.slice(
        0,
        Math.max(0, maxFiles - previewImages.length)
      );

      const newPreviews = allowed.map((file) => {
        const url = URL.createObjectURL(file);
        urlsRef.current.add(url);
        return { id: generateId(), url, file };
      });

      setPreviewImages((prev) => [...prev, ...newPreviews]);
      if (inputRef.current) inputRef.current.value = "";
    },
    [maxFiles, generateId, previewImages.length]
  );

  const removeImage = React.useCallback((id: string) => {
    setPreviewImages((prev) => {
      const toRemove = prev.find((p) => p.id === id);
      if (toRemove) {
        URL.revokeObjectURL(toRemove.url);
        urlsRef.current.delete(toRemove.url);
      }
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const clearAll = React.useCallback(() => {
    urlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    urlsRef.current.clear();
    setPreviewImages([]);
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  const openFileDialog = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  React.useEffect(() => {
    const urls = urlsRef.current;
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
      urls.clear();
    };
  }, []);

  return {
    previewImages,
    inputRef,
    accept,
    handleFileInputChange,
    removeImage,
    clearAll,
    openFileDialog,
  } as const;
}
