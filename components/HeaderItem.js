function HeaderItem ({Icon, title}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white content-center mt-8">
      <Icon className="h-8 mb-1 grouphover:animate-bounce"/>
      <p className="opacity-0 group-hover:opacity-100
      tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem