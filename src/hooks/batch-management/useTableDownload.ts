import type {SVGProps} from "react";
import { TFunction } from "i18next";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

;
export const columns  = (t: TFunction) => [
  {name: t("batch-management.table.tables.name"), uid: "name"},
  {name: t("batch-management.table.tables.status"), uid: "status"},
  {name: t("batch-management.table.tables.dateStart"), uid: "dateStart"},
  {name: t("batch-management.table.tables.dateEnd"), uid: "dateEnd"},
  {name: t("batch-management.table.tables.actions"), uid: "actions"},
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    status: "paused",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    status: "vacation",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    status: "active",
    dateStart: "2022-01-01",
    dateEnd: "2022-01-01",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];




