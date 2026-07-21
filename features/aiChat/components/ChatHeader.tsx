const ChatHeader = () => {
  return (
    <div className='p-4 border-b border-[#C89268]/20 bg-[#faf7f4ef]'>
      <div className='flex items-center gap-3'>
        <div className='w-9 h-9 rounded-full bg-[#C89268]/20 flex items-center justify-center'>
          🎧
        </div>

        <div>
          <h2 className='font-semibold text-[#dc8747] text-xl'>Vinyl AI</h2>

          <div className='flex items-center gap-2 text-sm opacity-70'>
            <span className='w-2 h-2 rounded-full bg-green-500' />
            online
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
