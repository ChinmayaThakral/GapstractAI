import { Typography, Card, Space, Row, Col } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ padding: '2rem' }}>
        <Col xs={24} sm={20} md={16} lg={14}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1}>
                Welcome to Research Assistant
                <i className="las la-flask" style={{ marginLeft: '12px' }}></i>
              </Title>
              <Paragraph>
                Your intelligent companion for managing research papers and
                discovering insights
              </Paragraph>
            </div>

            <Card>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Title level={3}>
                  <i
                    className="las la-info-circle"
                    style={{ marginRight: '8px' }}
                  ></i>
                  How It Works
                </Title>

                <Card
                  type="inner"
                  title={
                    <span>
                      <i
                        className="las la-folder-open"
                        style={{ marginRight: '8px' }}
                      ></i>
                      Organize Your Papers
                    </span>
                  }
                >
                  <Paragraph>
                    Upload and manage your research papers in one place. Add
                    annotations, track citations, and categorize your documents
                    efficiently.
                  </Paragraph>
                </Card>

                <Card
                  type="inner"
                  title={
                    <span>
                      <i
                        className="las la-search"
                        style={{ marginRight: '8px' }}
                      ></i>
                      Research Gaps Analysis
                    </span>
                  }
                >
                  <Paragraph>
                    Identify potential research gaps in your field. Our system
                    helps you analyze existing literature and discover
                    unexplored areas.
                  </Paragraph>
                </Card>

                <Card
                  type="inner"
                  title={
                    <span>
                      <i
                        className="las la-chart-bar"
                        style={{ marginRight: '8px' }}
                      ></i>
                      Visualize Connections
                    </span>
                  }
                >
                  <Paragraph>
                    See the relationships between papers, authors, and research
                    topics through interactive visualizations.
                  </Paragraph>
                </Card>

                <Card
                  type="inner"
                  title={
                    <span>
                      <i
                        className="las la-users"
                        style={{ marginRight: '8px' }}
                      ></i>
                      Collaborate with Teams
                    </span>
                  }
                >
                  <Paragraph>
                    Work together with your research team. Share papers,
                    annotations, and insights within your organization.
                  </Paragraph>
                </Card>
              </Space>
            </Card>

            <Card>
              <Title level={3}>
                <i className="las la-rocket" style={{ marginRight: '8px' }}></i>
                Getting Started
              </Title>
              <Paragraph>
                1. Join or create an organization to start collaborating
              </Paragraph>
              <Paragraph>2. Upload your first research paper</Paragraph>
              <Paragraph>
                3. Add annotations and identify research gaps
              </Paragraph>
              <Paragraph>
                4. Explore visualizations to discover connections
              </Paragraph>
            </Card>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
