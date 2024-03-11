import React from 'react'

export default function page(props) {
    return (
        <>
            <article className="relative w-4/5 h-3/6 flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-40 pt-14  mx-auto mt-4" >
                <img src="https://media.istockphoto.com/id/185325598/photo/elementary-student.jpg?s=1024x1024&w=is&k=20&c=hsa6MSAMkI3dQHv4GUCA47z465CazdUR7FfGAbSoCeQ=" alt="image" className="absolute inset-0 h-full w-full object-cover" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 "></div> */}
                <h3 className="z-10 mt-3 text-xl font-bold text-black">{props.name}</h3>
            </article>
        </>
    )
}
