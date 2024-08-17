import React from 'react'
import {faqs} from './../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index) => <FaqItem item={item} key={index}/>)}
    </ul>

  )
}

export default FaqList

// faqs is an array containing FAQ items.
// .map() is a function that iterates over each item in the array.
//This passes the current item from the faqs array as a prop named item to the FaqItem component.
//The index of the current item is passed