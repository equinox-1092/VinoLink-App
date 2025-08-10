"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RippleButton } from "@/components/magicui/ripple-button";
import { PlusIcon, Upload as UploadIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useImagePreview,
  type ImagePreview as ImagePreviewType,
} from "@/hooks/useImagePreview";

interface ImagePreviewItemProps {
  image: ImagePreviewType;
  onRemove: (id: string) => void;
}

const ImagePreviewItem = ({ image, onRemove }: ImagePreviewItemProps) => (
  <div className="relative group aspect-square">
    <Image
      src={image.url}
      alt="Vista previa"
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onRemove(image.id);
      }}
      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity duration-300 ease-in-out"
      aria-label="Eliminar imagen"
    >
      <X className="h-5 w-5 text-white" />
    </button>
  </div>
);

export default function MacerationCreatePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const {
    previewImages,
    inputRef,
    accept,
    handleFileInputChange,
    removeImage,
    openFileDialog,
    clearAll,
  } = useImagePreview({ maxFiles: 6 });
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center p-6">
      <div className="flex gap-6 w-full max-w-5xl">
        <div className="w-full max-w-2xl bg-card rounded-xl shadow-sm border border-border">
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-foreground mb-6">
              {t("batch-management.maceration.createTitle")}
            </h1>

            <form className="space-y-5">
              <div className="space-y-5">
                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-muted-foreground"
                    htmlFor="macerationName"
                  >
                    {t("batch-management.maceration.form.name")}
                  </label>
                  <input
                    id="macerationName"
                    name="macerationName"
                    placeholder={
                      t("batch-management.maceration.form.name") ||
                      "ViñaElSol-Cabernet-2025-L01"
                    }
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    type="text"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      className="text-sm font-medium text-muted-foreground"
                      htmlFor="dateStartMaceration"
                    >
                      {t("batch-management.maceration.form.dateStartMaceration")}
                    </label>
                    <input
                      id="dateStartMaceration"
                      name="dateStartMaceration"
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      type="date"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      className="text-sm font-medium text-muted-foreground"
                      htmlFor="Temperature"
                    >
                      {t("batch-management.maceration.form.Temperature")}
                    </label>
                    <input
                      id="Temperature"
                      name="Temperature"
                      step="1"
                      min="0"
                      max="100"
                      placeholder="12 °C"
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      type="number"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-muted-foreground"
                    htmlFor="duration"
                  >
                    {t("batch-management.maceration.form.Duration")}
                  </label>
                  <input
                    id="duration"
                    name="duration"
                    placeholder={
                      t("batch-management.maceration.form.Duration") ||
                      "12"
                    }
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    type="number"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-muted-foreground"
                    htmlFor="responsibleOperatorMaceration"
                  >
                    {t("batch-management.maceration.form.responsibleOperator")}
                  </label>
                  <input
                    id="responsibleOperatorMaceration"
                    name="responsibleOperatorMaceration"
                    placeholder={
                      t("batch-management.maceration.form.responsibleOperator") ||
                      "Juan Pérez"
                    }
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    type="text"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-muted-foreground"
                    htmlFor="notes"
                  >
                    {t("batch-management.maceration.form.notes")}
                  </label>
                  <textarea
                    id="notesMaceration"
                    name="notesMaceration"
                    placeholder={
                      t("batch-management.maceration.form.notes") ||
                      "Observaciones..."
                    }
                    rows={3}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <RippleButton
                  rippleColor="#FF0000"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      router.back();
                      clearAll();
                    }, 200);
                  }}
                >
                  {t("button.cancel")}
                </RippleButton>
                <RippleButton
                  rippleColor="#ADD8E6"
                  type="submit"
                  onClick={() => {}}
                >
                  {t("button.submit")}
                </RippleButton>
              </div>
            </form>
          </div>
        </div>

        {/* Upload images section */}
        <div className="w-96 bg-card rounded-xl shadow-sm border border-border overflow-hidden">
          <div className="p-4">
            <div
              className={`border-2 border-dashed border-border rounded-lg transition-colors ${
                previewImages.length === 0 ? "p-8" : "p-4"
              } bg-background/50`}
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.classList.add(
                  "border-primary/50",
                  "bg-primary/5"
                );
              }}
              onDragLeave={(e) => {
                e.currentTarget.classList.remove(
                  "border-primary/50",
                  "bg-primary/5"
                );
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove(
                  "border-primary/50",
                  "bg-primary/5"
                );
                if (e.dataTransfer.files.length > 0) {
                  handleFileInputChange({
                    target: { files: e.dataTransfer },
                  } as unknown as React.ChangeEvent<HTMLInputElement>);
                }
              }}
            >
              <input
                ref={inputRef}
                type="file"
                className="hidden"
                id="file-upload"
                multiple
                accept={accept}
                onChange={handleFileInputChange}
              />

              {previewImages.length === 0 ? (
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-3 py-6"
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    <UploadIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {t("upload.subtitle")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Arrastra archivos aquí o haz clic para seleccionar
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, WebP, JPEG (máx. 5MB)
                    </p>
                  </div>
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {previewImages.slice(0, 3).map((image) => (
                      <ImagePreviewItem
                        key={image.id}
                        image={image}
                        onRemove={removeImage}
                      />
                    ))}
                    {previewImages.length < 6 && (
                      <div
                        className="aspect-square border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-accent/50 transition-colors"
                        onClick={openFileDialog}
                      >
                        <div className="text-center p-2">
                          <PlusIcon className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                          <span className="text-xs text-muted-foreground">
                            {t("upload.add")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {previewImages.length > 3 && (
                    <div className="grid grid-cols-3 gap-3">
                      {previewImages.slice(3, 6).map((image) => (
                        <ImagePreviewItem
                          key={image.id}
                          image={image}
                          onRemove={removeImage}
                        />
                      ))}
                      {previewImages.length < 6 && previewImages.length > 3 && (
                        <div className="aspect-square"></div>
                      )}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-xs text-destructive hover:underline cursor-pointer"
                    >
                      {t("upload.deleteAll")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
