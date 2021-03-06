import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
// import { graphCMSImageLoader } from '../util';

const PostCard = ({post}) => {
    console.log(post);
    return (
        <div className="bg-white shadow-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg " />            
            </div>
            <h1 className="transition duration-700 text-center mb-8">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
        </div>

    )
}

export default PostCard
