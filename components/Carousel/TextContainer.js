import React from 'react'

const TextContainer = (props) => {
  return (
    <div>
       <div className="text-yellow-400 absolute lg:relative flex-row-reverse ">
        <p className=" text-2xl lg:text-5xl"> {props.Title}</p>
        <p className="text-xs w-56 lg:w-3/4 text-slate-600 lg:text-2xl">
          {props.Description}
        </p>
      </div>
    </div>
  )
}

export default TextContainer