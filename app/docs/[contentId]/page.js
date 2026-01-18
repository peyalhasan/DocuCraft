import React from 'react'

function page({params: {contentId}}) {
console.log(contentId)
  return (
    <div className='text-black'>{contentId}</div>
  )
}

export default page