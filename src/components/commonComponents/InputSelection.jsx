import React, {useState} from 'react'
import DownIcon from './../HeroIcons/DownIcon';

function InputSelection() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  return (
    <>
        <div className="w-full flex" >
            <input className="input rounded-tr-none rounded-br-none border-r-0" readOnly value={"Food"}/>
            <button onClick={() => setIsDropDownOpen(true)} className="p-3 border border-gray-300 border-l-0 rounded-tr rounded-br"><DownIcon /></button>
        </div>
        {isDropDownOpen &&
            <div className="w-full flex flex-col items-center border-t border-x border-gray-300">
            </div>
        }
    </>
  )
}

export default InputSelection