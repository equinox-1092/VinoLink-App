// src/app/traceability/components/TimelineItem.tsx
'use client';

import { ClockCircleOutlined, SyncOutlined, CheckCircleOutlined, CloseCircleOutlined, FileTextOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Tag, Tooltip } from 'antd';
import { TimelineEvent } from '../app/traceability/types';
import { useTranslation } from 'react-i18next';

const statusIcons = {
  DRAFT: <ClockCircleOutlined style={{ color: '#faad14' }} />,
  IN_PROGRESS: <SyncOutlined spin style={{ color: '#1890ff' }} />,
  COMPLETED: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
  FAILED: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
};

const statusColors = {
  DRAFT: 'default',
  IN_PROGRESS: 'processing',
  COMPLETED: 'success',
  FAILED: 'error',
};

interface TimelineItemProps {
  event: TimelineEvent;
  onClick: (event: TimelineEvent) => void;
}

export default function TimelineItem({ event, onClick }: TimelineItemProps) {
  const hasOutOfRangeParams = event.parameters.some(p => p.isOutOfRange);
  const hasDocuments = event.documents.length > 0;
  const { t } = useTranslation();
  return (
    <div className="flex mb-6">
      <div className="flex flex-col items-center mr-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
          {statusIcons[event.status]}
        </div>
        <div className="flex-1 w-0.5 bg-gray-200 my-2"></div>
      </div>
      
      <div className="flex-1">
        <Card 
          className={`hover:shadow-md transition-shadow ${hasOutOfRangeParams ? 'border-orange-200' : ''}`}
          onClick={() => onClick(event)}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Tag color={statusColors[event.status]}>
                  {event.status.replace('_', ' ')}
                </Tag>
                <span className="font-medium">{event.title}</span>
                {hasOutOfRangeParams && (
                  <Badge status="error" text="Alerta" />
                )}
              </div>
              
              <div className="text-sm text-gray-500 mb-2">
                {new Date(event.timestamp).toLocaleString()} • {event.operator.name} ({event.operator.role})
              </div>
              
              <div className="flex flex-wrap gap-1 mb-2">
                {event.parameters.slice(0, 4).map((param, idx) => (
                  <Tooltip 
                    key={idx} 
                    title={param.isOutOfRange ? 'Valor fuera de rango' : undefined}
                  >
                    <Tag 
                      color={param.isOutOfRange ? 'error' : 'default'}
                      className="m-0"
                    >
                      {param.name}: {param.value} {param.unit}
                    </Tag>
                  </Tooltip>
                ))}
                {event.parameters.length > 4 && (
                  <Tag>+{event.parameters.length - 4} más</Tag>
                )}
              </div>
              
              {event.notes && (
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                  {event.notes}
                </p>
              )}
            </div>
            
            <div className="flex flex-col items-end gap-2 ml-4">
              {hasDocuments && (
                <div className="flex items-center text-sm text-gray-500">
                  <FileTextOutlined className="mr-1" />
                  {event.documents.length}
                </div>
              )}
              <Button type="link" size="small" className="p-0">
                {t('traceability.viewDetails')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}