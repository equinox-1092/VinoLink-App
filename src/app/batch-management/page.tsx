"use client";
import React from "react";
import { HeaderContent } from "@/components/header-content";
import { BatchGrafic } from "./batch-grafic/page";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import {
  IconPlant2,
  IconDroplet,
  IconFlask,
  IconOval,
  IconArrowsLeftRight,
  IconFilter,
} from "@tabler/icons-react";
import Link from "next/link";
export default function BatchManagement() {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderContent />
      <div className="px-2 mt-8">
        <div className="flex items-center justify-between p-8">
          <h1 className="text-xl font-semibold">
            {t("batch-management.dashboard.stage")}
          </h1>
        </div>
        {/**cards */}
        <div className="w-full px-4 sm:px-6 lg:px-8 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {/**Harvest and Destemming */}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconPlant2
                  size={24}
                  stroke={1.5}
                  title="Harvest and Destemming"
                />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.harvest")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/harvest"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
            {/**Maceration */}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconDroplet size={24} stroke={1.5} title="Maceration" />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.maceration")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/maceration"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
            {/**Alcoholic Fermentation */}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconFlask
                  size={24}
                  stroke={1.5}
                  title="Alcoholic Fermentation"
                />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.alcoholicFermentation")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/alcoholic-fermentation"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
            {/**Malolactic Fermentation */}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconOval
                  size={24}
                  stroke={1.5}
                  title="Malolactic Fermentation"
                />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.malolacticFermentation")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/malolactic-fermentation"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
            {/**Racking and Aging*/}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconArrowsLeftRight
                  size={24}
                  stroke={1.5}
                  title="Racking and Aging"
                />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.racking")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/racking-and-aging"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
            {/**Filtering and Stabilization */}
            <div className="flex flex-col justify-between h-full p-4 border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200 transition-all ease-in-out cursor-pointer bg-white">
              <div className="flex items-center justify-baseline space-x-2">
                <IconFilter
                  size={24}
                  stroke={1.5}
                  title="Filtering and Stabilization"
                />
                <h2 className="text-lg font-medium">
                  {t("batch-management.subtitle.filtering")}
                </h2>
              </div>
              <div className="mt-4 self-end">
                <Button>
                  <Link href={"/batch-management/filtering-and-stabilization"}>
                    {t("button.viewDetails")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-8">
        <div className="flex items-center justify-between p-8">
          <h1 className="text-xl font-semibold">
            {t("batch-management.dashboard.analysis")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <BatchGrafic />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-semibold mb-2">Alerts</h2>
            <ul className="space-y-2">
              <li className="text-red-600">⚠️ Temperatura alta en Lote A</li>
              <li className="text-yellow-600">
                ℹ️ Densidad estancada en Lote B
              </li>
              <li className="text-red-600">⚠️ pH fuera de rango en Lote C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
