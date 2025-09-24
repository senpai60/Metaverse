import React from 'react'

function PageHeadings({para,heading}) {
  return (
    <div className="text-center about-head flex flex-col items-center py-20">
        <h5 className="text-2xl font-light mb-2">{heading}</h5>
        <h3 className="text-5xl font-medium mb-2 w-150">{para}</h3>
      </div>
  )
}

export default PageHeadings