"use client"
import React, { useState } from 'react'

export default function page() {
    const [resourceType, setResourceType] = useState('posts')
    return (

        <>

            <main className='w-full flex flex-col justify-center items-center'>
                <div className=' flex justify-between border-2  '>

                    <button className='bg-teal-400 border-2 p-4  text-white text-lg' onClick={() => { setResourceType('posts') }}>WholeSales</button>
                    <button className='bg-teal-400 border-2 p-4 text-white text-lg' onClick={() => { setResourceType('Users') }}>Retailes</button>
                    <button className='bg-teal-400 border-2 p-4 text-white text-lg' onClick={() => { setResourceType('Comments') }}>Agents</button>
                </div>
                <h1 className='text-center text-4xl font-bold py-3'>ADMIN DESKTOP</h1>
                <div className="w-10/12 flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden shadow-xl  rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-700 ">
                                    <thead>
                                        <tr className='w-full bg-teal-400 px-6 py-3 text-center text-lg font-bold text-gray-100 '>
                                            Wholesales
                                        </tr>
                                        <tr>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-lg font-bold text-gray-100 ">Name</th>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-lg font-bold text-gray-100 uppercase">Describtion</th>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-lg font-bold text-gray-100 uppercase">Privileges</th>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-lg font-bold text-gray-100 uppercase">Notification</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-center shadow-xl">
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Connection</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Manage Network</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Manage all the orders</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Connection</td>

                                        </tr>

                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Payments</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">View/Manage</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">All</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Payment</td>

                                        </tr>

                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">All Access</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">All Accesses</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">Manage all the orders</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">Payment, Connection</td>

                                        </tr>
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Order manager</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Manage all order</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Manage all order</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Orders</td>

                                        </tr>
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">ADMIN</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">WHOLESALER ADMIN</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">ALL</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Connection, order, profile</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <form className='w-10/12 mx-auto  '>
                    <div className="mb-4 p-5">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 ">Name</label>
                        <input type="text" id="name" name="name" placeholder='Enter name' className="mt-1 p-2 w-full border rounded-md" />
                    </div>

                    <div className="mb-4 p-5">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea id="description" name="description" placeholder="Enter Description" rows="3" className="mt-1 p-2 w-full border rounded-md"></textarea>
                    </div>
                    
                   <h1 className='text-lg'>previllage</h1>
                  
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox " />
                            <span className="ml-2">Option 1</span>
                        </label>

                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 2</span>
                        </label>

                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>

                            <h1 className='text-lg flex justify-row'>notificatipn</h1>
                        </label> <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label> <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label> <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label> <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label> <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2">Option 3</span>
                        </label>
                    </div>


                    <button type="submit" className="bg-teal-400 w-full text-white px-4 py-2 rounded-md">save</button>
                </form>

               
            </main>
        </>
    )
}
