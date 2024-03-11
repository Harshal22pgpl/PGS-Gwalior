import React from 'react'

export default function page() {
    return (
        <>
            <main className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-center text-4xl font-bold py-3'>Fee Structure</h1>
                <div className="w-10/12 flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden shadow-xl  rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-700 ">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-xs font-bold text-gray-100 uppercase">Programme</th>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-xs font-bold text-gray-100 uppercase">Age Group</th>
                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-xs font-bold text-gray-100 uppercase">Annual Tution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-center shadow-xl">
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Nursery to KG-2</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">03 - 06</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">15000/Year</td>

                                        </tr>

                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">I - V</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">06 - 12</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">17500/Year</td>

                                        </tr>

                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">VI - VIII</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">12 - 14</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">20000/Year</td>

                                        </tr>
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">IX - X</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">14 - 16</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">22500/Year</td>

                                        </tr>
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">XI - XII</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">16 - 18</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">25000/Year</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 flex flex-col mt-10">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden   shadow-xl rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200  dark:divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="w-full bg-teal-400 px-6 py-3 text-center text-3xl font-medium text-gray-100 uppercase ">Additional Services</th>

                                            <th scope="col" className="bg-teal-400 px-6 py-3 text-center text-3xl font-medium text-gray-100 uppercase "></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap  text-sm font-medium text-gray-800 dark:text-gray-800">Re-Admission Fee</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">600/Rs</td>

                                        </tr>

                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">New Admission Fee</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">1200/Rs</td>

                                        </tr>

                                        <tr>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-800">Transportation (optional)</td>
                                            <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-800">Included in Yearly Fee</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
