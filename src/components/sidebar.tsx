"use client";
import React, { useState } from "react";
import { Sidebar as SidebarWrapper, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconLayoutDashboard,
  IconPackage,
  IconTimelineEvent,
  IconTruckDelivery,
  IconReceipt2,
  IconBellRinging,
  IconChartBar,
  IconSettings,
  IconLogout
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Asegúrate de que la ruta de la imagen sea correcta
const avatarUrl = "https://assets.aceternity.com/manu.png";

export function Sidebar() {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconLayoutDashboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Gestión de Lotes",
      href: "/batch-management",
      icon: (
        <IconPackage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Trazabilidad",
      href: "/traceability",
      icon: (
        <IconTimelineEvent className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reaprovisionamiento",
      href: "/",
      icon: (
        <IconTruckDelivery className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Órdenes de Venta",
      href: "/",
      icon: (
        <IconReceipt2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Alertas & Notificaciones",
      href: "/",
      icon: (
        <IconBellRinging className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Reportes & Análisis",
      href: "/",
      icon: (
        <IconChartBar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Configuración de Cuenta",
      href: "/account",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Cerrar Sesión",
      href: "/",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full overflow-hidden">
      <SidebarWrapper open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 overflow-hidden">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <div className="relative h-7 w-7 shrink-0">

                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </SidebarWrapper>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Vino Link
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
