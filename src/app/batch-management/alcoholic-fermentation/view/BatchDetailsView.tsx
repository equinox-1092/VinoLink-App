import React from "react";
import { BatchViewDialog } from "@/components/BatchViewDialog";
import { UserType } from "@/hooks/batch-management/useTableDownload";

interface BatchDetailsViewProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBatch: UserType | null;
  onEditBatch: (batch: UserType) => void;
}

export function BatchDetailsView({
  isOpen,
  onClose,
  selectedBatch,
  onEditBatch,
}: BatchDetailsViewProps) {
  if (!selectedBatch) return null;

  return (
    <BatchViewDialog
      isOpen={isOpen}
      onClose={onClose}
      title={`Lote #${selectedBatch.id}`}
      description="Detalles del lote de fermentación alcohólica"
      size="lg"
      actions={[
        {
          label: "Cerrar",
          onClick: onClose,
          variant: "outline",
        },
        {
          label: "Editar",
          onClick: () => {
            onEditBatch(selectedBatch);
            onClose();
          },
          variant: "default",
        },
      ]}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-sm text-gray-500">ID del Lote</h4>
            <p className="mt-1">{selectedBatch.id}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-500">Estado</h4>
            <p className="mt-1">{selectedBatch.status || "No especificado"}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-500">Nombre</h4>
            <p className="mt-1">{selectedBatch.name}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm text-gray-500">Email</h4>
            <p className="mt-1">{selectedBatch.email}</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium text-sm text-gray-500 mb-2">
            Información Adicional
          </h4>
          <p className="text-sm text-gray-600">
            Aquí puedes agregar más información detallada sobre el lote de
            fermentación.
          </p>
        </div>
      </div>
    </BatchViewDialog>
  );
}
