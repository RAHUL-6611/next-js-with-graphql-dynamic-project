import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import {getCategories} from "../services"

const Header = () => {
    const [categories,setCategories] = useState([])

    useEffect(() =>
    {getCategories().then((categories) => {
        setCategories(categories)}
        )}
    ,[]);
    
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full border-blue-400 py-8 inline-block">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">Parmaras</span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) =>(
                        <Link key={index} href={`/category/${category.slug}`}>
                        <span className="cursor-pointer md:float-right mt-2 font-semibold align-middle text-white">{category.name}</span>
                        </Link>
                    )
                    )}
                
                </div>
            </div>
        </div>
    )
}

export default Header;
