import React, { useState } from 'react'
import Button from '@/components/Button/Button';
import { ADMISSION_SUCCESS, ERR_MSG, FORM_INITIALS } from '@/lib/constants/admission';
import Image from 'next/image';

export default function ModalCard() {
  const [hasError, setError] = useState({ msg: '', type: '' })
  const [formData, setFormData] = useState(FORM_INITIALS);
  const handleChange = ({ target }) => {
    const { name, value } = target
    setError({ msg: '', type: '' })
    setFormData((prev) => ({ ...prev, [name]: value }))

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ msg: '', type: '' })
    let isValid = validator(formData, ERR_MSG, ['otherQuery'])
    if (isValid === true) {
      try {
        setIsLoading(true)
        let res = await addAdmissionQuery(formData)
        if (res) {
          setFormData(FORM_INITIALS)
          setIsLoading(false)
          setError({ msg: ADMISSION_SUCCESS, type: 'success' })
        }
      } catch (error) {
        setIsLoading(false)
      }
    }
    else {
      setError({ msg: isValid, type: 'error' })
    }

  };

  return (
    <>
      <div className="w-full h-full " >
        <h1 className='text-center p-3 text-tteal text-5xl font-extrabold'>Pratibha Global School, GWALIOR</h1>
        <h2 className='text-center p-3 text-tteal text-3xl font-extrabold'>Admission Open 2024-25</h2>

        <div className='flex flex-col md:flex-row md:justify-around items-center bg-cover'>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 w-full md:w-80 shadow-md flex flex-col border-indigo-200 rounded-xl ">
            <h1 className=' text-xl bg-clip-text bg-gradient-to-r to-yellow-600 from-pink-400'>Admisson Form</h1>
            <input
              type="text"
              name="applicantName"
              placeholder="Parent Name*"
              value={formData.applicantName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="applicantPhone"
              value={formData.applicantPhone}
              placeholder="Mobile*"
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="email"
              name="applicantEmail"
              value={formData.applicantEmail}
              placeholder="your@email.com"
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <select
              name="instituteName"
              value={formData.instituteName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="GWALIOR">GWALIOR</option>
              <option value="Bagli">Bagli</option>
              <option value="Gwaliour">Gwaliour</option>
              <option value="Nathdwara">Nathdwara</option>
              {/* Add your cities here */}
            </select>
            <input
              type="text"
              name="admissionYear"
              value={formData.admissionYear}
              placeholder="2023-2024"
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              placeholder="Any query or message"
              name="otherQuery"
              value={formData.otherQuery}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              btnType="primary" // Adjust button type as needed
              size="large" // Adjust button size as needed

              className="text-white px-4 py-2 rounded-lg"
              style={{ background: '#006666' }}
            >
              Submit
            </Button>
          </form>

          <div className='hidden md:flex lg:flex flex-col justify-center items-center mt-5 md:mt-0 max-w-3xl'>
          <Image
          alt="image"
          src="/AboutCarosoul/4.png"
          width={600}
          height={500}
          className='rounded-full'
          />
          </div>
        </div>
      </div>
    </>
  )
}
