"use client";
import React from "react";
import { HeaderContent } from "@/components/header-content";
import { BatchGrafic } from "./batch-grafic/page";
import { useTranslation } from "react-i18next";
import {
  IconPlant2,
  IconFlask,
  IconOval,
  IconArrowsLeftRight,
  IconFilter,
  IconCloudDownload,
  IconCheck,
} from "@tabler/icons-react";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import BatchTable from "./table/page";
import { BatchCard } from "@/components/BatchCard";
import FermentationLayout from "./alcoholic-fermentation/layout";
import HarvestLayout from "./harvest/layout";
import MacerationLayout from "./maceration/layout";
import MalolacticFermentationLayout from "./malolactic-fermentation/layout";
import RackingLayout from "./racking/layout";
import FilteringLayout from "./filtering/layout";
import HarvestPage from "./harvest/page";
import MacerationPage from "./maceration/page";
import AlcoholicFermentationPage from "./alcoholic-fermentation/page";
import MalolacticFermentationPage from "./malolactic-fermentation/page";
import RackingPage from "./racking/page";
import FilteringPage from "./filtering/page";

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
            {/* Harvest and Destemming */}
            <BatchCard
              icon={
                <IconPlant2
                  size={24}
                  stroke={1.5}
                  title="Harvest and Destemming"
                />
              }
              title={t("batch-management.subtitle.harvest")}
            >
              <HarvestLayout>
                <HarvestPage />
              </HarvestLayout>
            </BatchCard>
            {/* Maceration */}
            <BatchCard
              icon={<IconPlant2 size={24} stroke={1.5} title="Maceration" />}
              title={t("batch-management.subtitle.maceration")}
            >
              <MacerationLayout>
                <MacerationPage />
              </MacerationLayout>
            </BatchCard>
            {/* Alcoholic Fermentation */}
            <BatchCard
              icon={
                <IconFlask
                  size={24}
                  stroke={1.5}
                  title="Alcoholic Fermentation"
                />
              }
              title={t("batch-management.subtitle.alcoholicFermentation")}
            >
              <FermentationLayout>
                <AlcoholicFermentationPage />
              </FermentationLayout>
            </BatchCard>
            {/* Malolactic Fermentation */}
            <BatchCard
              icon={
                <IconOval
                  size={24}
                  stroke={1.5}
                  title="Malolactic Fermentation"
                />
              }
              title={t("batch-management.subtitle.malolacticFermentation")}
            >
              <MalolacticFermentationLayout>
                <MalolacticFermentationPage />
              </MalolacticFermentationLayout>
            </BatchCard>
            {/* Racking and Aging */}
            <BatchCard
              icon={
                <IconArrowsLeftRight
                  size={24}
                  stroke={1.5}
                  title="Racking and Aging"
                />
              }
              title={t("batch-management.subtitle.racking")}
            >
              <RackingLayout>
                <RackingPage />
              </RackingLayout>
            </BatchCard>
            {/* Filtering and Stabilization */}
            <BatchCard
              icon={
                <IconFilter
                  size={24}
                  stroke={1.5}
                  title="Filtering and Stabilization"
                />
              }
              title={t("batch-management.subtitle.filtering")}
            >
              <FilteringLayout>
                <FilteringPage />
              </FilteringLayout>
            </BatchCard>
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
