"use client";
import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type EChartsOption = echarts.EChartsOption;

export function BatchGrafic() {
  const chartRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const option: EChartsOption = {
      backgroundColor: "#ffffff",
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#e5e7eb",
        textStyle: {
          color: "#1f2937",
        },
        borderWidth: 1,
        padding: 10,
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: "center",
        textStyle: {
          color: "#4b5563",
          fontSize: 12,
        },
      },
      series: [
        {
          name: "Batch Distribution",
          type: "pie",
          radius: ["60%", "80%"],
          center: ["40%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: "#fff",
            borderWidth: 4,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: "bold",
              color: "#1f2937",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 335,
              name: t("batch-management.subtitle.harvest"),
              itemStyle: { color: "#3b82f6" },
            },
            {
              value: 310,
              name: t("batch-management.subtitle.maceration"),
              itemStyle: { color: "#6366f1" },
            },
            {
              value: 274,
              name: t("batch-management.subtitle.alcoholicFermentation"),
              itemStyle: { color: "#8b5cf6" },
            },
            {
              value: 235,
              name: t("batch-management.subtitle.malolacticFermentation"),
              itemStyle: { color: "#d946ef" },
            },
            {
              value: 400,
              name: t("batch-management.subtitle.racking"),
              itemStyle: { color: "#ec4899" },
            },
          ],
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: (idx: number) => Math.random() * 200,
        },
      ],
    };

    chart.setOption(option);

    // Re-dimensionar al cambiar tamaño de ventana
    const resizeHandler = () => chart.resize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      chart.dispose();
    };
  }, [t]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mx-6 mb-6">
      <div
        ref={chartRef}
        id="main"
        style={{ width: "100%", height: "400px" }}
        className="p-4"
      />
    </div>
  );
}
