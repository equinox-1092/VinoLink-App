"use client";
import React from "react";
import { HeaderContent } from "@/components/header-content";
import { BatchGrafic } from "./batch-grafic/page";
import { useTranslation } from "react-i18next";
import {
  IconPlant2,
  IconDroplet,
  IconFlask,
  IconOval,
  IconArrowsLeftRight,
  IconFilter,
  IconCloudDownload,
  IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import BatchTable from "./table/page";
import { ButtonShow } from "@/components/button-show";
import { useState } from "react";
import { ShowDialog } from "@/components/showDialog";
import FermentationPage from "./fermentation/page";

export default function BatchManagement() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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
                <ButtonShow onClick={() => setIsOpen(true)}>
                  {t("button.viewDetails")}
                </ButtonShow>
                <ShowDialog
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                >
                  <FermentationPage />
                </ShowDialog>
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
                <ButtonShow>
                  <Link href={"/batch-management/maceration"}>
                    {t("button.viewDetails")}
                  </Link>
                </ButtonShow>
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
                <ButtonShow>
                  <Link href={"/batch-management/alcoholic-fermentation"}>
                    {t("button.viewDetails")}
                  </Link>
                </ButtonShow>
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
                <ButtonShow>
                  <Link href={"/batch-management/malolactic-fermentation"}>
                    {t("button.viewDetails")}
                  </Link>
                </ButtonShow>
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
                <ButtonShow>
                  <Link href={"/batch-management/racking-and-aging"}>
                    {t("button.viewDetails")}
                  </Link>
                </ButtonShow>
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
                <ButtonShow>
                  <Link href={"/batch-management/filtering-and-stabilization"}>
                    {t("button.viewDetails")}
                  </Link>
                </ButtonShow>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Table and graphic */}
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
            <h2 className="text-xl font-semibold mb-2">
              {t("batch-management.table.title")}
            </h2>
            <div className="flex items-center justify-between gap-2">
              <select name="etapa" id="">
                <option value="">{t("batch-management.table.stage")}</option>
              </select>
              <select name="lote" id="">
                <option value="">{t("batch-management.table.batch")}</option>
              </select>
              <AnimatedSubscribeButton className="w-36">
                <span className="group inline-flex items-center justify-center">
                  <IconCloudDownload className="mr-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  {t("batch-management.table.download")}
                </span>
                <span className="group inline-flex items-center">
                  <IconCheck className="mr-2 size-4" />
                  {t("batch-management.table.download")}
                </span>
              </AnimatedSubscribeButton>
            </div>
            <div>
              <BatchTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
