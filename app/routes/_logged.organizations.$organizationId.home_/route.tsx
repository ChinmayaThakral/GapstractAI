import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import {
  Card,
  Col,
  Empty,
  List,
  Progress,
  Row,
  Statistic,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
const { Title, Text } = Typography

dayjs.extend(relativeTime)

export default function HomePage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()

  // Fetch user's papers with annotations and research gaps
  const { data: papers } = Api.paper.findMany.useQuery({
    where: {
      userId: user?.id,
      organizationId,
    },
    include: {
      annotations: true,
      researchGaps: true,
    },
  })

  // Fetch recent annotations across all papers
  const { data: recentAnnotations } = Api.annotation.findMany.useQuery({
    where: {
      paper: {
        organizationId,
      },
    },
    include: {
      user: true,
      paper: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  })

  const totalPapers = papers?.length || 0
  const analyzedPapers =
    papers?.filter(p => p.validationScore !== null).length || 0
  const averageValidationScore =
    papers?.reduce((acc, paper) => acc + (paper.validationScore || 0), 0) /
    (analyzedPapers || 1)

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-bar" style={{ marginRight: 8 }}></i>
          Research Dashboard
        </Title>
        <Text type="secondary">
          View insights and analysis of your research papers
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-file-alt"></i> Total Papers
                  </>
                }
                value={totalPapers}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-check-circle"></i> Analyzed Papers
                  </>
                }
                value={analyzedPapers}
                suffix={`/ ${totalPapers}`}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-star"></i> Avg. Validation Score
                  </>
                }
                value={averageValidationScore}
                precision={2}
                suffix="/100"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} lg={14}>
            <Card
              title={
                <>
                  <i className="las la-file-medical-alt"></i> Your Papers Status
                </>
              }
            >
              {papers?.length ? (
                <List
                  dataSource={papers}
                  renderItem={paper => (
                    <List.Item>
                      <List.Item.Meta
                        title={paper.title}
                        description={
                          <>
                            <Text type="secondary">
                              Added{' '}
                              {dayjs(paper.createdAt).format('MMM D, YYYY')}
                            </Text>
                            <Progress
                              percent={paper.validationScore || 0}
                              status={
                                paper.validationScore ? 'active' : 'exception'
                              }
                              size="small"
                              style={{ marginTop: 8 }}
                            />
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              ) : (
                <Empty description="No papers uploaded yet" />
              )}
            </Card>
          </Col>
          <Col xs={24} lg={10}>
            <Card
              title={
                <>
                  <i className="las la-comments"></i> Recent Annotations
                </>
              }
            >
              {recentAnnotations?.length ? (
                <List
                  dataSource={recentAnnotations}
                  renderItem={annotation => (
                    <List.Item>
                      <List.Item.Meta
                        title={annotation.user.name || 'Anonymous'}
                        description={
                          <>
                            <Text>{annotation.content}</Text>
                            <br />
                            <Text type="secondary">
                              on "{annotation.paper.title}"{' • '}
                              {dayjs(annotation.createdAt).fromNow()}
                            </Text>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              ) : (
                <Empty description="No recent annotations" />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
