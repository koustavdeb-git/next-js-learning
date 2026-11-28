import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <p>
      About Page

      </p>
      <Link href="/about/blog" className=''>My Blogs</Link>
    </div>
  )
}

export default page
