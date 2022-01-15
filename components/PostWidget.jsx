import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import moment from "moment"
import Link from 'next/link'

import {graphCMSImageLoader} from "../util";
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">

            </h3>
        </div>
    )
}

export default PostWidget
