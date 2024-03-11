'use client'
import React, { useState } from 'react'
import Button from '../Button/Button'
import MultiFileUpload from '../UploadFile/MultiFile'
import { NEWSINITAIL } from '@/lib/constants'
import { addNews } from '@/lib/services/news'

export default function form() {
    const [newsData, setNewsData] = useState(NEWSINITAIL)
    const handleChange =({target})=>{
     const {name, value} = target
     setNewsData((prev)=>({...prev, [name]:value}))
    }
    const handleSubmit =async() =>{
    await addNews(newsData)
    }
    return (
        <div className="py-7">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover
            bg-[url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')]">
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">News</h2>
                    <p className="text-xl text-gray-600 text-center">Add News</p>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input name='title' value={newsData.title} onChange={handleChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                    </div>
                    <div className="mt-4">
                    <MultiFileUpload name='Upload Image'/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Redirected Link</label>
                        <input name='reDirectedLink' value={newsData.reDirectedLink} onChange={handleChange} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                    </div>
                    <div className="mt-4">

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">News Content</label>
                        <textarea name='content' value={newsData.content} onChange={handleChange} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>

                    <div className="mt-8">
                        <Button onClick={handleSubmit} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">POST</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
