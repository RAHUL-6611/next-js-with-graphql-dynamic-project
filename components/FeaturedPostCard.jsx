import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => {
    return (
        <div className="relative h-72">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md w-full h-72 inline-block" style={{backgroundImage: `url('${post.featuredImage.url}')`}} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col justify-center items-center w-full h-full absolute p-4 font-semibold">
                <p className="text-center text-white text-xs h-full w-full font-semibold">
                    {moment(post.createdAt).format("MMM DD, YYYY")}
                </p>
                <p className="text-white mb-4 text-center">{post.title}</p>
                <div className="flex items-center relative bottom-5 w-full justify-center">
                    <Image
                    unoptimized
                    height="30px"
                    weight="30px"
                    layout="fill"
                    alt={post.author.name}
                    src={post.author.photo.url}
                    className="drop-shadow-lg rounded-full align-middle"
                     />
                </div>
            </div>  
            <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
        </div>
    )
}

export default FeaturedPostCard
