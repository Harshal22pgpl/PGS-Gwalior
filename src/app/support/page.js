"use client"
import React,{useState} from 'react'
import { CONTACT_INITIAL } from '@/lib/constants';
import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function page() {
    const [contactData, setContactData] = useState(CONTACT_INITIAL)
    const [hasError, setError] = useState({ msg: '', type: '' })
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = ({ target }) => {
        setError({ msg: '', type: '' })
        const { name, value } = target
        setContactData((prev) => ({ ...prev, [name]: value }))
    }
    const handleForceUpdate = () => setError({ msg: '', type: '' });
    const handleSubmit = async () => {
        const isValid = validator(contactData, ERR_MSG, 'email')
        if (isValid === true) {
            try {
                setIsLoading(true)
                const res = await postContact(contactData)
                if (res) {
                    setIsLoading(false)
                    setError({ msg: SUCCESS_MSG(contactData.firstName), type: 'success' })
                    setContactData(CONTACT_INITIAL)
                    scrollToTop()
                }
            } catch (error) {
                setIsLoading(false)
            }
        } else {
            scrollToTop()
            setError({ msg: isValid, type: 'error' })

        }
    }
        return (
            <>
                <main className=" w-full flex flex-col justify-center  p-5  bg-cover bg-center" style={{ backgroundImage: "url('/MessageSvg.svg')" }}>
                    <div className='w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center '>
                        <h1 class="text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Staff Support </h1>

                    </div>
                </main>

                <div className=' lg:w-9/12 md:w-9/12 w-full sm:flex flex-col  mx-auto lg:flex-row md:flex-row flex justify-between '>
                    <div className='flex flex-col  items-center justify-center p-5'>
                        <Image
                            className='inline'
                            src="/support/support1.png"
                            alt="support Image"
                            width={200}
                            height={200}

                        />
                        <h1>
                            helpline
                        </h1>
                        <h1>
                            1800-200-094
                        </h1>

                    </div>
                    <div className='flex flex-col  items-center justify-center p-5 '>

                        <Image
                            className='inline'
                            src="/support/devvv.png"
                            alt="feedback Image"
                            width={200}
                            height={200}
                        />
                        <h1>
                            Developer team
                        </h1>
                        <h1>pgplDeveloperTeam@gmail.com </h1>
                    </div>
                    <div className='flex flex-col  items-center justify-center p-5'>

                        <Image
                            className='inline'
                            src="/support/feedback.png"
                            alt="feedback Image"
                            width={200}
                            height={200}
                        />
                        <h1>
                            Feedback
                        </h1>
                        <h1>pgplgrp@gmail.com</h1>
                    </div>

                </div>


                <div className="flex justify-center items-center w-screen bg-white">
                    <div className="container mx-auto my-4 px-4 lg:px-20" id='msgContainer'>
                        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-3xl">Send us a <br /> message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input name='firstName' value={contactData.firstName} onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="First Name*" />
                                <input name='lastName' value={contactData.lastName} onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="Last Name*" />
                                <input name='email' value={contactData.email} onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="email" placeholder="Email*" />
                                <input name='phone' value={contactData.phone} onChange={handleChange} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="number" placeholder="Phone*" />
                            </div>
                            <div className="my-4">
                                <textarea name='message' value={contactData.message} onChange={handleChange} placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button onClick={handleSubmit} className="uppercase text-sm font-bold tracking-wide hover:bg-teal-700 active:bg-teal-800 bg-teal-400 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>

                        <div
                            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-teal-100 rounded-2xl">
                            <div className="flex flex-col text-black">
                                <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                                <p className="text-gray-400">
                                </p>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Main Office</h2>
                                        <p className="text-gray-400">BHAWARASALA , BEHIND ARVINDO REVATI, Sanwer Rd, GWALIOR, Madhya Pradesh 453555</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <div className="flex flex-col">
                                        <i className="fas fa-phone-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Call Us</h2>
                                        <p className="text-gray-400">Tel:+917024104142</p>
                                        <p className="text-gray-400">Fax:+917024104150</p>
                                    </div>
                                </div>

                                <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <a href="https://www.google.com/maps/search/pratibha+global+school+GWALIOR/@22.8001571,75.8378225,17z?entry=ttu" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                        <i className="fab fa-facebook-f text-blue-900" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
