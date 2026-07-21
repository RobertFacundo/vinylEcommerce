import MarkdownRenderer from '@/shared/components/ui/MarkdownRenderer'

interface Props {
  role: 'user' | 'assistant'
  message: string
}

const ChatBubble = ({ role, message }: Props) => {
  const isUser = role === 'user'

  return (
    <div
      className={`
        flex
        ${isUser ? 'justify-end' : 'justify-start'}
      `}
    >
      <div
        className={`
          max-w-[80%]
          px-4
          py-2
          mb-2
          rounded-2xl
          font-[family-name:var(--font-geist-mono)]
          text-[12px]

          ${
            isUser
              ? `
                bg-[#C89268]
                text-white
                rounded-br-sm
              `
              : `
                bg-[#efe0d5]
                text-[#391d08]
                rounded-bl-sm
              `
          }
        `}
      >
        <MarkdownRenderer>{message}</MarkdownRenderer>
      </div>
    </div>
  )
}

export default ChatBubble
