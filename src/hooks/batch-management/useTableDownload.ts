import type { SVGProps } from "react";
import { TFunction } from "i18next";
import { Column } from "@/components/DataTable";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = (t: TFunction): Column<UserType>[] => [
  { name: t("batch-management.table.tables.name"), uid: "name" },
  { name: t("batch-management.table.tables.status"), uid: "status" },
  { name: t("batch-management.table.tables.dateStart"), uid: "dateStart" },
  { name: t("batch-management.table.tables.dateEnd"), uid: "dateEnd" },
  { name: t("batch-management.table.tables.actions"), uid: "actions" },
];

export const columnsHarvest = (t: TFunction): Column<UserType>[] => [
  { name: t("batch-management.table.tables.name"), uid: "name" },
  { name: t("batch-management.table.tables.status"), uid: "status" },
  { name: t("batch-management.table.tables.harvestDate"), uid: "harvestDate" },
  { name: t("batch-management.table.tables.grapeVariety"), uid: "grapeVariety" },
  { name: t("batch-management.table.tables.pH"), uid: "pH" },
  { name: t("batch-management.table.tables.responsibleOperator"), uid: "responsibleOperator" },
  { name: t("batch-management.table.tables.actions"), uid: "actions" },
];

export const columnsMaceration = (t: TFunction): Column<UserType>[] => [
  { name: t("batch-management.table.tables.name"), uid: "name" },
  { name: t("batch-management.table.tables.status"), uid: "status" },
  { name: t("batch-management.table.tables.dateStartMaceration"), uid: "dateStartMaceration" },
  { name: t("batch-management.table.tables.Temperature"), uid: "temperature" },
  { name: t("batch-management.table.tables.Duration"), uid: "duration" },
  { name: t("batch-management.table.tables.responsibleOperator"), uid: "responsibleOperator" },
  { name: t("batch-management.table.tables.Notes"), uid: "notes" },
  { name: t("batch-management.table.tables.actions"), uid: "actions" },
];

export interface UserType {
  id: number;
  name: string;
  status: string;
  dateStart: string;
  dateEnd: string;
  avatar: string;
  email: string;
  harvestDate: string;
  grapeVariety: string;
  pH: string;
  responsibleOperator: string;
  notes: string;
  dateStartMaceration: string;
  temperature: string;
  duration: string;
}

export const users: UserType[] = [
  {
    id: 1,
    name: "Tony Reichert",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 2,
    name: "Zoey Lang",
    status: "paused",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 3,
    name: "Jane Fisher",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 4,
    name: "William Howard",
    status: "vacation",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 5,
    name: "Kristen Copper",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 6,
    name: "Kristen Copper",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  },
  {
    id: 7,
    name: "Kristen Copper",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
    harvestDate: "2022-01-01",
    grapeVariety: "Grape Variety",
    pH: "pH",
    responsibleOperator: "Responsible Operator",
    notes: "Notes",
    dateStartMaceration: "2022-01-01",
    temperature: "Temperature",
    duration: "Duration",
  }
];




