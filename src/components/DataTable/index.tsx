"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
} from "@heroui/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { EyeIcon } from "../EyeIcon";
import { EditIcon } from "../EditIcon";
import { DeleteIcon } from "../DeleteIcon";

export interface Column<T> {
  name: string;
  uid: keyof T | "actions";
  align?: "start" | "center" | "end";
  width?: string | number;
  renderCell?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  statusOptions?: Record<string, ChipProps["color"]>;
  onView?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  ariaLabel?: string;
  renderActions?: (item: T) => React.ReactNode;
}

const defaultStatusOptions = {
  active: "success",
  paused: "danger",
  vacation: "warning",
} as const;

type ColumnConfig = {
  [key: string]: { width?: string | number; align: "start" | "center" | "end" };
  actions: { width: string; align: "center" };
  status: { width: string; align: "start" };
  default: { width: undefined; align: "start" };
};

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  statusOptions = defaultStatusOptions,
  onView,
  onEdit,
  onDelete,
  ariaLabel = "Data table",
  renderActions,
}: DataTableProps<T>) {
  const columnConfig = useMemo<ColumnConfig>(() => {
    const config: ColumnConfig = {
      actions: { width: "12%", align: "center" },
      status: { width: "15%", align: "start" },
      default: { width: undefined, align: "start" },
    };
    
    columns.forEach(col => {
      if (col.uid !== 'actions' && col.uid !== 'status') {
        config[String(col.uid)] = {
          width: col.width,
          align: col.align || "start"
        };
      }
    });

    return config;
  }, [columns]);

  const renderCell = React.useCallback(
    (item: T, columnKey: string) => {
      const column = columns.find((col) => col.uid === columnKey);
      
      if (column?.renderCell) {
        return column.renderCell(item);
      }

      const cellValue = item[columnKey as keyof T] as unknown;

      switch (columnKey) {
        case "status":
          return (
            <Chip
              className="capitalize"
              color={
                typeof cellValue === 'string' 
                  ? (statusOptions[cellValue] as ChipProps["color"] || "default") 
                  : "default"
              }
              size="sm"
              variant="flat"
            >
              {String(cellValue)}
            </Chip>
          );
        case "actions":
          if (renderActions) {
            return renderActions(item);
          }
          return (
            <div className="relative flex items-center gap-2">
              {onView && (
                <Tooltip content="View">
                  <span 
                    className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-blue-500"
                    onClick={() => onView(item)}
                  >
                    <EyeIcon />
                  </span>
                </Tooltip>
              )}
              {onEdit && (
                <Tooltip content="Edit">
                  <span 
                    className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-green-600"
                    onClick={() => onEdit(item)}
                  >
                    <EditIcon />
                  </span>
                </Tooltip>
              )}
              {onDelete && (
                <Tooltip content="Delete">
                  <span 
                    className="text-lg text-danger cursor-pointer active:opacity-50 hover:text-red-600"
                    onClick={() => onDelete(item)}
                  >
                    <DeleteIcon />
                  </span>
                </Tooltip>
              )}
            </div>
          );
        default:
          return cellValue as React.ReactNode;
      }
    },
    [columns, onView, onEdit, onDelete, renderActions, statusOptions]
  );

  const getColumnConfig = (uid: string) => {
    const key = uid as keyof typeof columnConfig;
    return columnConfig[key] || columnConfig.default;
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  
  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);
  
  // Get current rows
  const currentRows = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  }, [data, currentPage, rowsPerPage]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-fixed" aria-label={ariaLabel}>
        <TableHeader columns={columns} className="text-left">
          {(column) => {
            const config = getColumnConfig(String(column.uid));
            return (
              <TableColumn
                key={String(column.uid)}
                align={config.align}
                className="px-4 py-2 font-medium text-gray-700 text-left"
                style={{ width: config.width }}
              >
                {column.name}
              </TableColumn>
            );
          }}
        </TableHeader>

        <TableBody items={currentRows}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="px-4 py-2">
                  {renderCell(item, String(columnKey))}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
        
      </Table>
      <div className="flex items-center justify-between px-2 py-4">
        <div className="text-sm text-muted-foreground">
          Mostrando {Math.min((currentPage - 1) * rowsPerPage + 1, data.length)}-{
            Math.min(currentPage * rowsPerPage, data.length)
          } de {data.length} elementos
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {getPageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {totalPages > 3 && currentPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
