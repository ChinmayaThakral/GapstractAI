import { Typography, Card, Row, Col, Spin, Tag, Divider } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PaperDetailsPage() {
  const { paperId } = useParams()

  const { data: paper, isLoading } = Api.paper.findFirst.useQuery({
    where: { id: paperId },
    include: {
      user: true,
      researchGaps: true,
      annotations: {
        include: {
          user: true,
        },
      },
      algorithms: true,
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

  if (!paper) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Title level={4}>Paper not found</Title>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={2}>
            <i className="las la-file-alt" style={{ marginRight: '8px' }}></i>
            Paper Details
          </Title>
          <Text type="secondary">
            Detailed information about the research paper and its analysis
          </Text>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Card>
              <Title level={3}>{paper.title}</Title>
              <div style={{ marginBottom: '16px' }}>
                <Tag color="blue">
                  <i className="las la-calendar"></i>{' '}
                  {dayjs(paper.createdAt).format('MMMM D, YYYY')}
                </Tag>
                {paper.validationScore && (
                  <Tag color="green">
                    <i className="las la-chart-bar"></i> Validation Score:{' '}
                    {paper.validationScore.toString()}
                  </Tag>
                )}
              </div>
              <Paragraph>{paper.abstract}</Paragraph>
              {paper.pdfUrl && (
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="las la-file-pdf"></i> View PDF
                </a>
              )}
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-lightbulb"></i> Research Gaps
                </>
              }
            >
              {paper.researchGaps?.map(gap => (
                <div key={gap.id} style={{ marginBottom: '16px' }}>
                  <Text strong>Gap Description:</Text>
                  <Paragraph>{gap.description}</Paragraph>
                  {gap.hypothesis && (
                    <>
                      <Text strong>Hypothesis:</Text>
                      <Paragraph>{gap.hypothesis}</Paragraph>
                    </>
                  )}
                  {gap.methodology && (
                    <>
                      <Text strong>Methodology:</Text>
                      <Paragraph>{gap.methodology}</Paragraph>
                    </>
                  )}
                  <Divider />
                </div>
              ))}
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-code"></i> Algorithms
                </>
              }
            >
              {paper.algorithms?.map(algorithm => (
                <div key={algorithm.id} style={{ marginBottom: '16px' }}>
                  <Text strong>{algorithm.name}</Text>
                  {algorithm.description && (
                    <Paragraph>{algorithm.description}</Paragraph>
                  )}
                  {algorithm.efficiency && (
                    <Tag color="blue">Efficiency: {algorithm.efficiency}</Tag>
                  )}
                  <Divider />
                </div>
              ))}
            </Card>
          </Col>

          <Col xs={24}>
            <Card
              title={
                <>
                  <i className="las la-comment"></i> Annotations
                </>
              }
            >
              {paper.annotations?.map(annotation => (
                <div key={annotation.id} style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    <Text strong>{annotation.user?.name || 'Anonymous'}</Text>
                    <Text type="secondary" style={{ marginLeft: '8px' }}>
                      {dayjs(annotation.createdAt).format('MMMM D, YYYY')}
                    </Text>
                  </Paragraph>
                  <Paragraph>{annotation.content}</Paragraph>
                  <Divider />
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
