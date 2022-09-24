import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { blogId } = useParams()
    return <div className="container flex flex-col py-40">{`BlogDetails for blog ${blogId}`}</div>
}

export default BlogDetails
