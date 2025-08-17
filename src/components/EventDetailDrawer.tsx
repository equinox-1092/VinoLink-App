// src/app/traceability/components/EventDetailDrawer.tsx
'use client';

import { Button, Descriptions, Divider, Drawer, Empty, Space, Tabs, Tag, Typography } from 'antd';
import { DownloadOutlined, EditOutlined, PaperClipOutlined } from '@ant-design/icons';
import { TimelineEvent } from '../app/traceability/types';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

interface EventDetailDrawerProps {
  visible: boolean;
  event: TimelineEvent | null;
  onClose: () => void;
}

export default function EventDetailDrawer({ visible, event, onClose }: EventDetailDrawerProps) {
  if (!event) return null;

  return (
    <Drawer
      title={event.title}
      width={600}
      onClose={onClose}
      open={visible}
      extra={
        <Space>
          <Button icon={<DownloadOutlined />}>Exportar</Button>
          <Button type="primary" icon={<EditOutlined />}>
            Editar
          </Button>
        </Space>
      }
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Resumen" key="1">
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="Fecha y hora">
              {new Date(event.timestamp).toLocaleString()}
            </Descriptions.Item>
            <Descriptions.Item label="Operario">
              {event.operator.name} ({event.operator.role})
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              <Tag color={
                event.status === 'COMPLETED' ? 'success' :
                event.status === 'IN_PROGRESS' ? 'processing' :
                event.status === 'FAILED' ? 'error' : 'default'
              }>
                {event.status.replace('_', ' ')}
              </Tag>
            </Descriptions.Item>
            {event.location && (
              <Descriptions.Item label="Ubicación">
                {event.location}
              </Descriptions.Item>
            )}
            {event.batchId && (
              <Descriptions.Item label="Lote">
                {event.batchId}
              </Descriptions.Item>
            )}
          </Descriptions>

          <Divider>Parámetros</Divider>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {event.parameters.map((param, idx) => (
              <div 
                key={idx} 
                className={`p-3 border rounded ${
                  param.isOutOfRange ? 'border-red-200 bg-red-50' : 'border-gray-200'
                }`}
              >
                <div className="text-sm text-gray-500">{param.name}</div>
                <div className="text-lg font-medium">
                  {param.value} {param.unit}
                </div>
                {param.isOutOfRange && (
                  <div className="text-xs text-red-500 mt-1">
                    Fuera de rango
                  </div>
                )}
              </div>
            ))}
          </div>

          {event.notes && (
            <>
              <Divider>Notas</Divider>
              <div className="p-4 bg-gray-50 rounded">
                {event.notes}
              </div>
            </>
          )}
        </TabPane>

        <TabPane 
          tab={
            <span>
              <PaperClipOutlined /> Documentos ({event.documents.length})
            </span>
          } 
          key="2"
        >
          <div className="space-y-2">
            {event.documents.length > 0 ? (
              event.documents.map((doc) => (
                <div 
                  key={doc.id} 
                  className="flex items-center p-3 border rounded hover:bg-gray-50"
                >
                  <div className="text-blue-500 mr-3">
                    <PaperClipOutlined style={{ fontSize: '20px' }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{doc.name}</div>
                    <div className="text-xs text-gray-500">
                      Subido el {new Date(doc.uploadedAt).toLocaleDateString()} por {doc.uploadedBy}
                    </div>
                  </div>
                  <Button 
                    type="text" 
                    icon={<DownloadOutlined />} 
                    onClick={() => window.open(doc.url, '_blank')}
                  />
                </div>
              ))
            ) : (
              <Empty description="No hay documentos adjuntos" />
            )}
          </div>
        </TabPane>
      </Tabs>
    </Drawer>
  );
}