import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className=' text-xl font-bold text-black border-2 px-5 py-3 rounded-3xl hover:bg-blue-400  duration-250  active:bg-blue-600'>{text}</button>
    </div>
  )
}

export default Button
