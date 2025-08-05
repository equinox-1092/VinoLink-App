"use client";

import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ButtonShow } from "./button-show";
import { ShowDialog } from "./showDialog";

interface BatchCardProps {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
}

export function BatchCard({ icon, title, children }: BatchCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
      <div className="flex items-center justify-baseline space-x-2">
        {icon}
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      <div className="mt-4 self-end">
        <ButtonShow onClick={() => setIsOpen(true)}>
          {t("button.viewDetails")}
        </ButtonShow>
        <ShowDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {children}
        </ShowDialog>
      </div>
    </div>
  );
}
