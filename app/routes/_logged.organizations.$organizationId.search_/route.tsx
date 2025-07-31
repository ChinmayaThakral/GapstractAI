import {
  Typography,
  Input,
  Select,
  Card,
  Row,
  Col,
  Space,
  Button,
  Tag,
  Spin,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SearchPage() {
  const { organizationId } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Fetch papers with search query
  const { data: papers, isLoading } = Api.paper.findMany.useQuery({
    where: {
      organizationId,
      OR: [
        { title: { contains: searchQuery, mode: 'insensitive' } },
        { abstract: { contains: searchQuery, mode: 'insensitive' } },
      ],
    },
    include: {
      annotations: true,
      researchGaps: true,
      algorithms: true,
      citationsAsSource: true,
      citationsAsTarget: true,
    },
  })

  // AI-powered semantic search
  const { mutateAsync: semanticSearch } = Api.ai.generateText.useMutation()

  const handleSearch = async (value: string) => {
    setSearchQuery(value)
  }

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value)
  }

  const handleSemanticSearch = async () => {
    if (!searchQuery) return

    const prompt = `Find papers related to: ${searchQuery}`
    const response = await semanticSearch({ prompt })
    // Process AI response...
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-search" style={{ marginRight: 8 }}></i>
          Research Paper Search
        </Title>
        <Paragraph>
          Search across paper repositories using keywords, semantic search, or
          explore related works.
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={16}>
            <Col flex="auto">
              <Search
                placeholder="Enter keywords or research context..."
                size="large"
                enterButton
                onSearch={handleSearch}
              />
            </Col>
            <Col>
              <Button
                type="primary"
                size="large"
                onClick={handleSemanticSearch}
                icon={<i className="las la-brain"></i>}
              >
                Semantic Search
              </Button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Space>
                <Text>Filter by:</Text>
                <Select
                  defaultValue="all"
                  style={{ width: 200 }}
                  onChange={handleFilterChange}
                  options={[
                    { value: 'all', label: 'All Papers' },
                    { value: 'recent', label: 'Recent Papers' },
                    { value: 'cited', label: 'Most Cited' },
                    { value: 'algorithms', label: 'With Algorithms' },
                    { value: 'gaps', label: 'Research Gaps' },
                  ]}
                />
              </Space>
            </Col>
          </Row>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <Spin size="large" />
            </div>
          ) : (
            <Row gutter={[16, 16]}>
              {papers?.map(paper => (
                <Col xs={24} sm={24} md={12} lg={8} key={paper.id}>
                  <Card
                    hoverable
                    title={
                      <Space>
                        <i className="las la-file-alt"></i>
                        <Text ellipsis style={{ maxWidth: 250 }}>
                          {paper.title}
                        </Text>
                      </Space>
                    }
                  >
                    <Paragraph ellipsis={{ rows: 3 }}>
                      {paper.abstract}
                    </Paragraph>
                    <Space wrap>
                      {paper.annotations?.length > 0 && (
                        <Tag color="blue">
                          <i className="las la-comment"></i>{' '}
                          {paper.annotations.length} Annotations
                        </Tag>
                      )}
                      {paper.researchGaps?.length > 0 && (
                        <Tag color="red">
                          <i className="las la-lightbulb"></i> Research Gaps
                        </Tag>
                      )}
                      {paper.algorithms?.length > 0 && (
                        <Tag color="green">
                          <i className="las la-code"></i> Algorithms
                        </Tag>
                      )}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
