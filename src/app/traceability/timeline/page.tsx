// src/app/traceability/timeline/page.tsx
"use client";

import { useState } from "react";
import {
  Card,
  Tag,
  Space,
  Button,
  Drawer,
  Descriptions,
  Badge,
  Input,
  Select,
  DatePicker,
  Divider,
  Empty,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  FileImageOutlined,
  FilePptOutlined,
  FileWordOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { TimelineEvent } from "../types";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// Mock data - replace with real data fetching
const mockEvents: TimelineEvent[] = [
  {
    id: "1",
    type: "harvest",
    title: "Cosecha",
    timestamp: "2024-08-10T09:30:00",
    operator: {
      id: "user1",
      name: "Juan Pérez",
      role: "Enólogo",
    },
    status: "COMPLETED",
    parameters: [
      { name: "Peso", value: 1200, unit: "kg" },
      { name: "°Brix", value: 24.5, unit: "°Bx" },
      { name: "pH", value: 3.4, unit: "" },
      { name: "Ácido Málico", value: 4.2, unit: "g/L" },
    ],
    documents: [
      {
        id: "doc1",
        name: "análisis_cosecha.pdf",
        type: "application/pdf",
        url: "/documents/analisis_cosecha.pdf",
        uploadedAt: "2024-08-10T10:00:00",
        uploadedBy: "user1",
      },
    ],
    notes:
      "Cosecha realizada en condiciones óptimas. Uvas en excelente estado.",
    location: "Parcela A1",
    batchId: "BATCH-2024-001",
  },
  // Add more mock events as needed
];

const statusIcons = {
  DRAFT: <ClockCircleOutlined style={{ color: "#faad14" }} />,
  IN_PROGRESS: <SyncOutlined spin style={{ color: "#1890ff" }} />,
  COMPLETED: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
  FAILED: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
};

const statusColors = {
  DRAFT: "default",
  IN_PROGRESS: "processing",
  COMPLETED: "success",
  FAILED: "error",
};

const fileIcons: Record<string, React.ReactNode> = {
  "application/pdf": <FilePdfOutlined style={{ color: "#ff4d4f" }} />,
  "image/": <FileImageOutlined style={{ color: "#52c41a" }} />,
  "application/msword": <FileWordOutlined style={{ color: "#1890ff" }} />,
  "application/vnd.ms-excel": (
    <FileExcelOutlined style={{ color: "#52c41a" }} />
  ),
  "application/vnd.ms-powerpoint": (
    <FilePptOutlined style={{ color: "#faad14" }} />
  ),
  default: <FileTextOutlined />,
};

export default function TimelinePage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    operator: "",
    dateRange: null,
  });

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setDrawerVisible(true);
  };

  const getFileIcon = (type: string) => {
    const iconKey = Object.keys(fileIcons).find((key) => type.includes(key));
    return iconKey ? fileIcons[iconKey] : fileIcons.default;
  };

  const renderEventCard = (event: TimelineEvent) => {
    const hasOutOfRangeParams = event.parameters.some((p) => p.isOutOfRange);

    return (
      <Card
        key={event.id}
        className="mb-4 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => handleEventClick(event)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Tag color={statusColors[event.status]}>
                {event.status.replace("_", " ")}
              </Tag>
              <span className="font-medium">{event.title}</span>
              {hasOutOfRangeParams && (
                <Badge status="error" text="Parámetros fuera de rango" />
              )}
            </div>

            <div className="text-sm text-gray-500 mb-2">
              {new Date(event.timestamp).toLocaleString()} •{" "}
              {event.operator.name} ({event.operator.role})
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {event.parameters.map((param, idx) => (
                <Tag
                  key={idx}
                  color={param.isOutOfRange ? "error" : "default"}
                  className="m-0"
                >
                  {param.name}: {param.value} {param.unit}
                </Tag>
              ))}
            </div>

            {event.notes && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {event.notes}
              </p>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            {event.documents.length > 0 && (
              <div className="flex items-center text-sm text-gray-500">
                <FileTextOutlined className="mr-1" />
                {event.documents.length}
              </div>
            )}
            <Button type="link" size="small">
              {t('traceability.viewDetails')}
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="p-4">
      <div className="mb-6 ">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.back()}
            className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            <IconArrowLeft size={20} stroke={1.5} />
          </button>
          <h1 className="text-2xl font-bold mb-2">{t('traceability.batch.title')}</h1>
        </div>

        <p className="text-gray-500">
          {t('traceability.batch.subtitle')}
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <Input
            placeholder="Buscar por lote, ID, etiqueta..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-1/3"
          />

          <Select
            placeholder="Estado"
            allowClear
            value={filters.status}
            onChange={(value) => setFilters({ ...filters, status: value })}
            className="w-full md:w-1/4"
          >
            <Select.Option value="COMPLETED">{t('traceability.batch.completed')}</Select.Option>
            <Select.Option value="IN_PROGRESS">{t('traceability.batch.inProgress')}</Select.Option>
            <Select.Option value="DRAFT">{t('traceability.batch.draft')}</Select.Option>
            <Select.Option value="FAILED">{t('traceability.batch.failed')}</Select.Option>
          </Select>

          <Select
            placeholder="Tipo de evento"
            allowClear
            value={filters.type}
            onChange={(value) => setFilters({ ...filters, type: value })}
            className="w-full md:w-1/4"
          >
            <Select.Option value="harvest">{t('traceability.batch.harvest')}</Select.Option>
            <Select.Option value="fermentation">{t('traceability.batch.fermentation')}</Select.Option>
            <Select.Option value="transfer">{t('traceability.batch.transfer')}</Select.Option>
            <Select.Option value="bottling">{t('traceability.batch.bottling')}</Select.Option>
          </Select>

          <DatePicker.RangePicker
            className="w-full md:w-1/3"
            onChange={(dates) => setFilters({ ...filters, dateRange: dates })}
          />

          <Button icon={<FilterOutlined />}>{t('traceability.batch.filtering')}</Button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>{t('traceability.batch.Showing')} {mockEvents.length} {t('traceability.batch.events')}</div>
          <div className="space-x-2">
            <Button icon={<DownloadOutlined />} type="text">
              PDF
            </Button>
            <Button icon={<DownloadOutlined />} type="text">
              CSV
            </Button>
          </div>
        </div>

        <Divider className="my-4" />

        <div className="space-y-4">{mockEvents.map(renderEventCard)}</div>
      </div>

      <Drawer
        title={selectedEvent?.title}
        width={600}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        extra={
          <Space>
            <Button icon={<DownloadOutlined />}>{t('traceability.batch.export')}</Button>
            <Button type="primary">{t('traceability.batch.edit')}</Button>
          </Space>
        }
      >
        {selectedEvent && (
          <div>
            <Descriptions column={1} bordered>
              <Descriptions.Item label={t('traceability.batch.date')}>
                {new Date(selectedEvent.timestamp).toLocaleString()}
              </Descriptions.Item>
              <Descriptions.Item label={t('traceability.batch.operator')}>
                {selectedEvent.operator.name} ({selectedEvent.operator.role})
              </Descriptions.Item>
              <Descriptions.Item label={t('traceability.batch.Status')}>
                <Tag color={statusColors[selectedEvent.status]}>
                  {selectedEvent.status.replace("_", " ")}
                </Tag>
              </Descriptions.Item>
              {selectedEvent.location && (
                <Descriptions.Item label={t('traceability.batch.location')}>
                  {selectedEvent.location}
                </Descriptions.Item>
              )}
              {selectedEvent.batchId && (
                <Descriptions.Item label={t('traceability.batch.batchId')}>
                  {selectedEvent.batchId}
                </Descriptions.Item>
              )}
            </Descriptions>

            <Divider>{t('traceability.batch.parameters')}</Divider>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {selectedEvent.parameters.map((param, idx) => (
                <Card
                  key={idx}
                  size="small"
                  className={param.isOutOfRange ? "border-red-500" : ""}
                >
                  <div className="text-sm text-gray-500">{param.name}</div>
                  <div className="text-lg font-medium">
                    {param.value} {param.unit}
                  </div>
                  {param.isOutOfRange && (
                    <div className="text-xs text-red-500">{t('traceability.batch.range')}</div>
                  )}
                </Card>
              ))}
            </div>

            {selectedEvent.notes && (
              <>
                <Divider>{t('traceability.batch.notes')}</Divider>
                <div className="p-4 bg-gray-50 rounded">
                  {selectedEvent.notes}
                </div>
              </>
            )}

            <Divider>{t('traceability.batch.attachments')}</Divider>
            <div className="space-y-2">
              {selectedEvent.documents.length > 0 ? (
                selectedEvent.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center p-2 border rounded hover:bg-gray-50"
                  >
                    {getFileIcon(doc.type)}
                    <span className="ml-2 flex-1">{doc.name}</span>
                    <Button
                      type="link"
                      size="small"
                      icon={<DownloadOutlined />}
                    />
                  </div>
                ))
              ) : (
                <Empty description={t('traceability.batch.noAttachments')} />
              )}
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
