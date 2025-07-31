import {
  Typography,
  Table,
  Button,
  Upload,
  message,
  Space,
  Modal,
  Input,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PapersPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [selectedPaper, setSelectedPaper] = useState<any>(null)
  const [annotationText, setAnnotationText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Queries and Mutations
  const { data: papers, refetch } = Api.paper.findMany.useQuery({
    where: { organizationId },
    include: { annotations: true, user: true },
  })

  const { mutateAsync: createPaper } = Api.paper.create.useMutation()
  const { mutateAsync: createAnnotation } = Api.annotation.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  // Handle file upload
  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      await createPaper({
        data: {
          title: file.name.replace('.pdf', ''),
          pdfUrl: url,
          organizationId: organizationId!,
          userId: user!.id,
          status: 'PENDING',
        },
      })
      message.success('Paper uploaded successfully')
      refetch()
    } catch (error) {
      message.error('Failed to upload paper')
    }
  }

  // Handle annotation creation
  const handleAddAnnotation = async () => {
    if (!annotationText || !selectedPaper) return

    try {
      await createAnnotation({
        data: {
          content: annotationText,
          paperId: selectedPaper.id,
          userId: user!.id,
        },
      })
      message.success('Annotation added successfully')
      setAnnotationText('')
      setIsModalVisible(false)
      refetch()
    } catch (error) {
      message.error('Failed to add annotation')
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Uploaded By',
      dataIndex: 'user',
      key: 'user',
      render: (user: any) => <Text>{user?.name || 'Unknown'}</Text>,
    },
    {
      title: 'Upload Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Text type={status === 'PENDING' ? 'warning' : 'success'}>
          {status}
        </Text>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <Button
            type="link"
            onClick={() => window.open(record.pdfUrl, '_blank')}
          >
            <i className="las la-file-pdf" /> View PDF
          </Button>
          <Button
            type="link"
            onClick={() => {
              setSelectedPaper(record)
              setIsModalVisible(true)
            }}
          >
            <i className="las la-comment" /> Add Annotation
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <Title level={2}>
            <i className="las la-file-alt" /> Research Papers
          </Title>
          <Text type="secondary">
            Upload and manage your research papers, add annotations, and
            collaborate with others.
          </Text>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Upload.Dragger
            accept=".pdf"
            beforeUpload={file => {
              handleUpload(file)
              return false
            }}
            showUploadList={false}
          >
            <p className="ant-upload-drag-icon">
              <i
                className="las la-cloud-upload-alt"
                style={{ fontSize: '48px' }}
              />
            </p>
            <p className="ant-upload-text">Click or drag PDF files to upload</p>
          </Upload.Dragger>
        </div>

        <Table
          columns={columns}
          dataSource={papers}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Add Annotation"
          visible={isModalVisible}
          onOk={handleAddAnnotation}
          onCancel={() => {
            setIsModalVisible(false)
            setAnnotationText('')
          }}
        >
          <Input.TextArea
            rows={4}
            value={annotationText}
            onChange={e => setAnnotationText(e.target.value)}
            placeholder="Enter your annotation here..."
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
