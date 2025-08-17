"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserType } from "@/hooks/batch-management/useTableDownload";

interface BatchEditFormProps {
  batch: UserType | null;
  onSave: (data: Partial<UserType>) => void;
  onClose: () => void;
  isOpen: boolean;
}

export function BatchEditForm({
  batch,
  onSave,
  onClose,
  isOpen,
}: BatchEditFormProps) {
  const [formData, setFormData] = React.useState<Partial<UserType>>(
    batch || {}
  );

  React.useEffect(() => {
    if (batch) {
      setFormData(batch);
    }
  }, [batch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  // Debug log
  console.log("BatchEditForm - isOpen:", isOpen, "batch:", batch);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ top: 0, bottom: 0 }}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Editar Lote #{batch?.id}</h2>
            <p className="text-sm text-gray-500">Modifica los datos del lote</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 overflow-y-auto p-6 space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Nombre del lote"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="email@ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label>Estado</Label>
              <Select
                value={formData.status}
                onValueChange={handleStatusChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Activo</SelectItem>
                  <SelectItem value="paused">Pausado</SelectItem>
                  <SelectItem value="vacation">En espera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 mt-6 border-t flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out">
                Cancelar
              </Button>
              <Button type="submit" className="cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out">Guardar cambios</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
