"use client";
import React from "react";
import { HeaderContent } from "@/components/header-content";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/button";
import { IconFlask } from "@tabler/icons-react";
import Link from "next/link";
export default function BatchManagement() {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderContent />
      <div>
        <h1>{t("batch-management.dashboard.stage")}</h1>
      </div>
      {/**cards */}
      <div className="max-w-5xl mx-auto px-8">
        {/**Fermentation */}
        <div className="flex flex-col justify-between p-4 border-l-4 border-blue-600 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer max-w-xs">
          <div className="flex items-center justify-baseline space-x-2">
            <IconFlask size={24} stroke={1.5} title="Fermentación" />
            <h2 className="text-lg font-medium">
              {t("batch-management.subtitle.fermentation")}
            </h2>
          </div>
          <div className="mt-4 self-end">
            <Button>
              <Link href={"/batch-management/fermentation"}>
                {t("button.viewDetails")}
              </Link>
            </Button>
          </div>
        </div>
        {/**Harvest and Destemming */}
        
        {/**Maceration */}
        {/**Alcoholic Fermentation */}
        {/**Malolactic Fermentation */}
        {/**Racking and Aging*/}
        {/**Filtering and Stabilization */}
      </div>
      <div>
        <h1>{t("batch-management.dashboard.analysis")}</h1>
      </div>
    </div>
  );
}
