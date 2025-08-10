import React from "react";
import { useTranslation } from "react-i18next";
import { Column,DataTable } from "@/components/DataTable";
import { User } from "@heroui/react";
import { users, columnsMalolacticFermentation } from "@/hooks/batch-management/useTableDownload";

type UserType = (typeof users)[0];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
} as const;

interface MalolacticFermentationTableProps {
  search: string;
}

export default function MalolacticFermentationTable({ search }: MalolacticFermentationTableProps) {
  const { t } = useTranslation();
  
  const tableColumns = React.useMemo<Column<UserType>[]>(() => {
    return columnsMalolacticFermentation(t).map(col => ({
      ...col,
      renderCell: col.uid === 'name' ? (user: UserType) => (
        <User
          avatarProps={{ radius: "lg", src: user.avatar }}
          description={user.email}
          name={user.name}
        />
      ) : undefined,
      width: col.uid === 'status' ? '15%' : 
             col.uid === 'actions' ? '12%' : undefined,
      align: col.uid === 'actions' ? 'center' : 'start'
    }));
  }, [t]);

  const handleView = (user: UserType) => {
    console.log('View user:', user);
    // Implement view logic here
  };

  const handleEdit = (user: UserType) => {
    console.log('Edit user:', user);
    // Implement edit logic here
  };

  const handleDelete = (user: UserType) => {
    console.log('Delete user:', user);
    // Implement delete logic here
  };

  return (
    <DataTable
      data={users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))}
      columns={tableColumns}
      statusOptions={statusColorMap}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
      ariaLabel="Batch management table"
    />
  );
}
