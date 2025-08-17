// src/app/traceability/page.tsx
'use client';

import { Card, Row, Col, Statistic, Button, Typography, Space, Badge, Tag } from 'antd';
import { 
  HistoryOutlined, 
  AlertOutlined, 
  FileDoneOutlined, 
  TeamOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { HeaderContent } from "@/components/header-content";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

// Mock data - replace with real data from your API
const stats = {
  totalEvents: 42,
  pendingActions: 3,
  completedProcesses: 12,
  activeOperators: 5,
  recentEvents: [
    { id: '1', type: 'fermentation', title: 'Inicio de fermentación', timestamp: '2024-08-10T14:30:00', status: 'IN_PROGRESS' },
    { id: '2', type: 'transfer', title: 'Trasiego a barrica', timestamp: '2024-08-09T11:15:00', status: 'COMPLETED' },
    { id: '3', type: 'analysis', title: 'Análisis de mosto', timestamp: '2024-08-08T09:45:00', status: 'COMPLETED' },
  ],
  criticalAlerts: [
    { id: 'alert1', message: 'Temperatura elevada en fermentador #3', level: 'high' },
    { id: 'alert2', message: 'pH bajo en lote BATCH-2024-015', level: 'medium' },
  ]
};

export default function TraceabilityPage() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      <HeaderContent />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Title level={2} className="mb-1">{t('traceability.wine')}</Title>
            <Text type="secondary">{t('traceability.subtitle')}</Text>
          </div>
          <Button 
            type="primary" 
            onClick={() => router.push('/traceability/timeline')}
            icon={<ArrowRightOutlined />}
          >
            {t('traceability.button')}
          </Button>
        </div>

        {/* Stats Cards */}
        <Row gutter={[16, 16]} className="mb-6">
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic 
                title={t('traceability.totalEvents')} 
                value={stats.totalEvents} 
                prefix={<HistoryOutlined />} 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic 
                title={t('traceability.pendingActions')} 
                value={stats.pendingActions} 
                prefix={<AlertOutlined />} 
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic 
                title={t('traceability.completedProcesses')} 
                value={stats.completedProcesses} 
                prefix={<FileDoneOutlined />} 
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic 
                title={t('traceability.activeOperators')} 
                value={stats.activeOperators} 
                prefix={<TeamOutlined />} 
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mb-6">
          {/* Recent Events */}
          <Col xs={24} lg={16}>
            <Card 
              title={t('traceability.recentEvents')} 
              extra={
                <Button 
                  type="link" 
                  onClick={() => router.push('/traceability/timeline')}
                >
                  {t('traceability.seeAll')}
                </Button>
              }
            >
              <div className="space-y-4">
                {stats.recentEvents.map(event => (
                  <div key={event.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <Text type="secondary" className="text-sm">
                        {new Date(event.timestamp).toLocaleString()}
                      </Text>
                    </div>
                    <Tag 
                      color={
                        event.status === 'COMPLETED' ? 'success' : 
                        event.status === 'IN_PROGRESS' ? 'processing' : 'default'
                      }
                    >
                      {event.status === 'IN_PROGRESS' ? t('traceability.inProgress') : t('traceability.completed')}
                    </Tag>
                  </div>
                ))}
              </div>
            </Card>
          </Col>

          {/* Critical Alerts */}
          <Col xs={24} lg={8}>
            <Card 
              title={
                <Space>
                  <AlertOutlined /> {t('traceability.alert')}
                  <Badge count={stats.criticalAlerts.length} style={{ backgroundColor: '#ff4d4f' }} />
                </Space>
              }
            >
              <div className="space-y-3">
                {stats.criticalAlerts.length > 0 ? (
                  stats.criticalAlerts.map(alert => (
                    <div 
                      key={alert.id} 
                      className={`p-3 rounded border-l-4 ${
                        alert.level === 'high' ? 'border-red-500 bg-red-  50' : 'border-orange-500 bg-orange-50'
                      }`}
                    >
                      <div className="font-medium">{alert.message}</div>
                      <Text type="secondary" className="text-xs">
                        Hace 2 horas
                      </Text>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <Text type="secondary">{t('traceability.noAlerts')}</Text>
                  </div>
                )}
              </div>
            </Card>
          </Col>
        </Row>

        <Card 
          title={t('traceability.actions')}
          className="mb-6"
        >
          <Space wrap>
            <Button type="primary">{t('traceability.buttons.registerEvent')}</Button>
            <Button>{t('traceability.buttons.generateReport')}</Button>
            <Button>{t('traceability.buttons.qualityAnalysis')}</Button>
            <Button>{t('traceability.buttons.batchManagement')}</Button>
          </Space>
        </Card>
      </div>
    </div>
  );
}