import React from 'react'

export const NewArticle = ({title, text}) => {
  return (
    <article className='h-[140px]l lg:-[160px] border-b-2 border-l-GrayishBlue py-7 last:border-none lg:py-3'>
        <h2 className='cursor-pointer hover:text-SoftOrange text-[20px] font-bold lg:text-[16px] xl:text-[20px'>{title}</h2>
        <p className='text-[15px]' >{text}</p>
    </article>
  )
}
