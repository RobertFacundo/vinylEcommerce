const ChatLoading = () => {
  return (
    <div className='flex justify-start'>
      <div
        className='
          bg-[#efe0d5]
          text-[#391d08]
          px-4
          py-3
          rounded-2xl
          rounded-bl-sm
          flex
          gap-1
        '
      >
        <span className='animate-bounce'>•</span>
        <span className='animate-bounce [animation-delay:150ms]'>•</span>
        <span className='animate-bounce [animation-delay:300ms]'>•</span>
      </div>
    </div>
  )
}

export default ChatLoading
