import React from 'react'

function Container({children}) {
  return (
    <div className="">
      <div className=" w-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[1200px] h-screen p-2 bg-background-light dark:bg-background-dark font-roboto">{children}</div>
      </div>
    </div>
  )
}

export default Container