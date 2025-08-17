"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Column, DataTable } from "@/components/DataTable";
import { User } from "@heroui/react";
import {
  users,
  columns,
  UserType,
} from "@/hooks/batch-management/useTableDownload";
import { BatchDetailsView } from "../view/BatchDetailsView";
import { BatchEditForm } from "../edit/BatchEditForm";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
} as const;

interface FermentationTableProps {
  search: string;
}

export default function FermentationTable({ search }: FermentationTableProps) {
  const { t } = useTranslation();
  const [selectedBatch, setSelectedBatch] = React.useState<UserType | null>(
    null
  );
  const [isViewDialogOpen, setIsViewDialogOpen] = React.useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const tableColumns = React.useMemo<Column<UserType>[]>(() => {
    return columns(t).map((col) => ({
      ...col,
      renderCell:
        col.uid === "name"
          ? (user: UserType) => (
              <User
                avatarProps={{ radius: "lg", src: user.avatar }}
                description={user.email}
                name={user.name}
              />
            )
          : undefined,
      width:
        col.uid === "status"
          ? "15%"
          : col.uid === "actions"
          ? "12%"
          : undefined,
      align: col.uid === "actions" ? "center" : "start",
    }));
  }, [t]);

  const handleView = (user: UserType) => {
    setSelectedBatch(user);
    setIsViewDialogOpen(true);
  };

  const handleEditBatch = (user: UserType) => {
    // Lógica para editar el lote
    console.log("Edit batch:", user);
    setSelectedBatch(user);
    setIsEditDialogOpen(true);
    // Aquí podrías redirigir a la página de edición
    // router.push(`/batch-management/alcoholic-fermentation/edit/${user.id}`);
  };

  const handleCloseDialog = () => {
    setIsViewDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  const handleEdit = (user: UserType) => {
    console.log("Edit user:", user);
    console.log("Setting selected batch and opening edit dialog");
    setSelectedBatch(user);
    setIsEditDialogOpen(true);
    // Log state after update (will be visible in the next render)
    setTimeout(() => {
      console.log("After state update - isEditDialogOpen:", isEditDialogOpen, "selectedBatch:", selectedBatch);
    }, 0);
  };

  const handleDelete = (user: UserType) => {
    console.log("Delete user:", user);
    // Implement delete logic here
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <DataTable
        data={filteredUsers}
        columns={tableColumns}
        statusOptions={statusColorMap}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        ariaLabel="Batch management table"
      />
      <BatchDetailsView
        isOpen={isViewDialogOpen}
        onClose={handleCloseDialog}
        selectedBatch={selectedBatch}
        onEditBatch={handleEditBatch}
      />
      <BatchEditForm
        batch={selectedBatch}
        onSave={handleEditBatch}
        onClose={handleCloseDialog}
        isOpen={isEditDialogOpen}
      />  
    </>
  );
}
