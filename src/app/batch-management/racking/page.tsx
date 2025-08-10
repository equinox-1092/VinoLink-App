"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RackingTable from "./table/page";
import { useRouter } from "next/navigation";

export default function RackingPage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          {t("batch-management.racking.title")}
        </h1>
        <button onClick={() => router.push("/batch-management/racking/create")} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          {t("batch-management.racking.create")}
        </button>
      </div>
      {/**filtrado de opciones */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={t("button.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all duration-200 flex-1"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          {t("button.search")}
        </button>
      </div>
      <div className="mt-6 w-full">
        <RackingTable search={search} />
      </div>
    </div>
  );
}
