'use client'
import { useState } from "react"
import PreviewImg from "../Modal/NewsModal"
import { capitalize } from "lodash";
import { useRouter } from "next/navigation";
import Image from "next/image";
const categories = ['All', 'Cricket', 'Kabbadi', 'Chair race', 'March past', 'Price distribution', 'Sac race']
export default function (props) {
  const [preview, setPreview] = useState({ state: false, imgSrc: '', title: '' })
  const router = useRouter()
  const category = props.category.replace('_', ' ')
  const showPreview = (imgSrc) => {
    setPreview({ state: true, imgSrc })
  }
  const hidePreview = () => {
    setPreview({ state: false, imgSrc: '' })
  }
  const handleCategory = (path) => {
    router.push(`/event/${path.replace(' ', '_')}`)
  }
  return (
    <>
      {preview.state && <PreviewImg onCancle={hidePreview} show={preview.state} imgSrc={preview.imgSrc}  />}
      <div className="bg-white w-full relative  top-10 start-0 border-b border-gray-200 p-2 ">
        <div className="flex items-center justify-center md:py-0 flex-wrap">
          {categories.map((val) => (
            <button type="button" onClick={() => handleCategory(val)} className={val === capitalize(category) ? 'text-teal-700 hover:bg-teal-700 focus:ring-teal-300  hover:text-white border  bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3   dark:hover:text-white border-teal-600 dark:text-teal-500 dark:hover:bg-teal-500 dark:bg-gray-900 dark:focus:ring-teal-800' : 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}>{val}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[650px] overflow-auto flex-grow relative top-10 p-4">
        {props?.data?.find((val) => val.name === category)?.images?.map((val, i) => (
          <div key={i} >
            <Image
            alt="image"
              width={650}
              height={650} onClick={() => showPreview(val)} className="h-auto max-w-full rounded-lg" src={val}  />
          </div>
        ))}


      </div>
     
    </>
  )
}
const generateClassName = (index) => (index >= 0 && index <= 2) ? 'mt-14' : ''