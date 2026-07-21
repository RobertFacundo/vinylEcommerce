import ReactMarkdown from 'react-markdown'

interface Props {
  children: string
}

const MarkdownRenderer = ({ children }: Props) => {
  return (
    <ReactMarkdown
      components={{
        strong: ({ children }) => (
          <strong className='font-bold text-[#dc8747]'>{children}</strong>
        ),
        p: ({ children }) => <p className='mb-2 last:mb-0'>{children}</p>
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
