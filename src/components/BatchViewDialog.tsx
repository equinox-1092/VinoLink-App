"use client";

import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButton {
  label: string;
  onClick: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  disabled?: boolean;
  className?: string;
}

interface BatchViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ActionButton[];
  className?: string;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | null
    | undefined;
}

export function BatchViewDialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  actions = [],
  className,
  size = "md",
}: BatchViewDialogProps) {
  // Acciones por defecto si no se proporcionan
  const defaultActions: ActionButton[] = [
    {
      label: "Cerrar",
      onClick: onClose,
      variant: "outline",
    },
  ];

  const dialogActions = actions.length > 0 ? actions : defaultActions;

  const sizeClasses = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
    "3xl": "sm:max-w-3xl",
    "4xl": "sm:max-w-4xl",
    "5xl": "sm:max-w-5xl",
    full: "sm:max-w-[95vw]",
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md,
          className
        )}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="py-4">{children}</div>

        {dialogActions.length > 0 && (
          <DialogFooter className="sm:justify-end">
            <div className="flex gap-2">
              {dialogActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  onClick={action.onClick}
                  disabled={action.disabled}
                  className={cn(action.className, "cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out")}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
