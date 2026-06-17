import React from 'react'
import Button from './Button'

const FilterPost = () => {
  return (
    <>
      <div className=' flex justify-around items-center my-3'>
        <Button text={"All"}/>
        <Button text={"Tech"}/>
        <Button text={"Travel"}/>
        <Button text={"Lifestyle"}/>
      </div>
    </>
  )
}

export default FilterPost
