import React from 'react'
import ReactDOM from "react-dom" 

function Modal({open, children}) {
  if(!open) return null

    return ReactDOM.createPortal(
        <div className="">
            <div className=" fixed h-screen w-screen top-0 left-0 right-0 bottom-0 bg-background-dark dark:bg-background-light opacity-50"></div>
            {children}
        </div>,
        document.getElementById("portal")
    )
}

export default Modal