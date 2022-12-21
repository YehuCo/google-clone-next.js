import React from 'react'

function HeaderOption({ Icon, title, selected }) {
  return (
    // make icon blue and border bolded when hovering over it
    <div className={`flex items-center space-x-1 border-b-4 border-transparent
     hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${selected && 'text-blue-500 border-blue-500'}`}>
        <Icon className='h-4' />
        {/* make title hidden on small screen */}
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption