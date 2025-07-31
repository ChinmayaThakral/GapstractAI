import { Typography, Card, Row, Col, Spin, Empty } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ResearchGapsPage() {
  const { organizationId } = useParams()

  // Fetch all papers with their research gaps
  const { data: papers, isLoading } = Api.paper.findMany.useQuery({
    where: { organizationId },
    include: {
      researchGaps: true,
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  if (!papers || papers.length === 0) {
    return (
      <PageLayout layout="full-width">
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <i className="las la-search"></i> Research Gaps Analysis
        </Title>
        <Empty description="No research gaps found" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <i className="las la-search"></i> Research Gaps Analysis
        </Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '40px' }}>
          Explore identified research gaps across all papers, along with
          suggested hypotheses and methodologies.
        </Paragraph>

        <Row gutter={[24, 24]}>
          {papers?.map(paper => (
            <Col xs={24} key={paper.id}>
              <Card
                title={
                  <span>
                    <i className="las la-file-alt"></i> {paper.title}
                  </span>
                }
                style={{ marginBottom: '20px' }}
              >
                {paper.researchGaps?.map(gap => (
                  <Card
                    key={gap.id}
                    type="inner"
                    style={{ marginBottom: '16px' }}
                  >
                    <Row gutter={[16, 16]}>
                      <Col xs={24} md={24}>
                        <Text strong>
                          <i className="las la-lightbulb"></i> Research Gap:
                        </Text>
                        <Paragraph>{gap.description}</Paragraph>
                      </Col>

                      {gap.hypothesis && (
                        <Col xs={24} md={12}>
                          <Text strong>
                            <i className="las la-flask"></i> Suggested
                            Hypothesis:
                          </Text>
                          <Paragraph>{gap.hypothesis}</Paragraph>
                        </Col>
                      )}

                      {gap.methodology && (
                        <Col xs={24} md={12}>
                          <Text strong>
                            <i className="las la-cogs"></i> Proposed
                            Methodology:
                          </Text>
                          <Paragraph>{gap.methodology}</Paragraph>
                        </Col>
                      )}
                    </Row>
                  </Card>
                ))}

                {(!paper.researchGaps || paper.researchGaps.length === 0) && (
                  <Empty
                    description="No research gaps identified for this paper"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
