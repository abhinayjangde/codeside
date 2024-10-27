"use client"
import React, { useEffect } from 'react'

const RefundPolicy:React.FC = () => {
    useEffect(() => {
        document.title = 'Refund Policy - The right way to learn coding'
    }, [])
    return (
        <>
            <div className='dark:bg-dark py-5 bg-gray-50 p-4'>
                <div className="max-w-screen-lg mx-auto bg-white dark:text-white dark:bg-black/[0.3]  rounded-lg shadow-md p-6 lg:p-10">

                    <h1 className="text-center text-2xl md:text-3xl justify-center lg:text-4xl font-semibold text-gray-800 dark:text-white mb-2 flex border-b pb-2">Refund Policy</h1>
                    <p className='bg-slate-200 text-center dark:bg-slate-800 mb-2 px-2 py-1 md:inline-block'>Last updated: April 25, 2024</p>
                    <p>
                        These Privacy Policy govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>Returns</h2>
                    <p className='mt-2'>
                        Since we deal in online video courses and it s a digital service, we don t offer a refund. We request you to watch our sample free videos, available in almost every course. You can also watch our youtube channel videos to get to know about the quality of our videos. In simple terms, we don&apos;t except refund at <span className='text-blue-800 underline'>https://codebhaiya.com</span>
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'> Refunds (if applicable)</h2>
                    <p>


                        We don t accept refund request Late or missing refunds (if applicable) Because of digital goods and services, we don t accept refund requests, please contact us at [codebhaiya@gmail.com].

                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>Refunds (if applicable)</h2>
                    <p>
                        unfortunately, sale items cannot be refunded.

                    </p>

                    <h2 className='text-xl sm:text-2xl my-4'>Exchanges (if applicable)</h2>
                    <p>
                        Since every course is in itself a valuable property, we don t take exchange requests too.
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>Gifts</h2>
                    <p>

                        As of now, we don t have any feature of gifting a course
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>Shipping</h2>

                    <p>

                        On our website, everything is online. We don t provide CD or DVD.
                    </p>

                 
                </div>
            </div>
        </>
    )
}

export default RefundPolicy