import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import { Card, Col, Empty, Row, Spin, Typography } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography

export default function VisualizationsPage() {
  const { organizationId } = useParams()
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null)

  // Fetch papers with citations included
  const { data: papers, isLoading: isPapersLoading } =
    Api.paper.findMany.useQuery({
      where: { organizationId },
      include: {
        citationsAsSource: true,
        citationsAsTarget: true,
        researchGaps: true,
      },
    })

  const metrics = papers
    ? [
        {
          name: 'Total Papers',
          value: papers.length.toString(),
        },
        {
          name: 'Total Citations',
          value: papers
            .reduce(
              (acc, paper) =>
                acc +
                paper.citationsAsSource.length +
                paper.citationsAsTarget.length,
              0,
            )
            .toString(),
        },
      ]
    : []

  if (isPapersLoading) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i
            className="las la-chart-network"
            style={{ marginRight: '8px' }}
          ></i>
          Research Visualizations
        </Title>
        <Text type="secondary">
          Explore research trends, citation networks, and knowledge maps to
          identify underexplored areas and research opportunities.
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          {/* Knowledge Map Card */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <span>
                  <i
                    className="las la-mind-share"
                    style={{ marginRight: '8px' }}
                  ></i>
                  Knowledge Map
                </span>
              }
            >
              {papers && papers.length > 0 ? (
                <div style={{ minHeight: '300px' }}>
                  {/* Knowledge map visualization would go here */}
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Text>
                      Displaying {papers.length} papers with their research
                      connections
                    </Text>
                  </div>
                </div>
              ) : (
                <Empty description="No papers available to visualize" />
              )}
            </Card>
          </Col>

          {/* Citation Network Card */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <span>
                  <i
                    className="las la-project-diagram"
                    style={{ marginRight: '8px' }}
                  ></i>
                  Citation Network
                </span>
              }
            >
              {papers && papers.length > 0 ? (
                <div style={{ minHeight: '300px' }}>
                  {/* Citation network visualization would go here */}
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Text>
                      {papers.reduce(
                        (acc, paper) =>
                          acc +
                          paper.citationsAsSource.length +
                          paper.citationsAsTarget.length,
                        0,
                      )}{' '}
                      total citations mapped
                    </Text>
                  </div>
                </div>
              ) : (
                <Empty description="No citation data available" />
              )}
            </Card>
          </Col>

          {/* Research Trends Card */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <span>
                  <i
                    className="las la-chart-line"
                    style={{ marginRight: '8px' }}
                  ></i>
                  Research Trends
                </span>
              }
            >
              {papers && papers.length > 0 ? (
                <div style={{ minHeight: '300px' }}>
                  {/* Research trends visualization would go here */}
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Text>
                      {papers.reduce(
                        (acc, paper) => acc + paper.researchGaps.length,
                        0,
                      )}{' '}
                      research gaps identified
                    </Text>
                  </div>
                </div>
              ) : (
                <Empty description="No trend data available" />
              )}
            </Card>
          </Col>

          {/* Efficiency Metrics Card */}
          <Col xs={24} lg={12}>
            <Card
              title={
                <span>
                  <i
                    className="las la-analytics"
                    style={{ marginRight: '8px' }}
                  ></i>
                  Efficiency Metrics
                </span>
              }
            >
              {metrics && metrics.length > 0 ? (
                <div style={{ minHeight: '300px' }}>
                  {/* Metrics visualization would go here */}
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Text>Analyzing user feedback and research efficiency</Text>
                  </div>
                </div>
              ) : (
                <Empty description="No metrics available" />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
