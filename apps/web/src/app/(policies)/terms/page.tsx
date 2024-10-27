"use client"
import React, { useEffect } from 'react'

const TermsOfService:React.FC = () => {
    useEffect(() => {
        document.title = 'Terms Of Service - The right way to learn coding'
    }, [])
    return (
        <>

            <div className='dark:bg-dark py-5 bg-gray-50 p-4'>
                <div className="max-w-screen-lg mx-auto bg-white dark:text-white dark:bg-black/[0.3]  rounded-lg shadow-md p-6 lg:p-10">

                    <h1 className="text-center text-2xl md:text-3xl justify-center lg:text-4xl font-semibold text-gray-800 dark:text-white mb-2 flex border-b pb-2">Terms Of Service</h1>
                    <p className='bg-slate-200 text-center dark:bg-slate-800 mb-2 px-2 py-1 md:inline-block'>Last updated: April 25, 2024</p>
                    <p>
                        These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                    <p className='mt-2'>
                        This website is operated by [CodeBhaiya]. Throughout the site, the terms “we”, “us” and “our” refer to [CodeBhaiya]. [CodeBhaiya] offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

                        By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.

                        Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

                        Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                    </p>
                    

                    <h2 className='text-xl sm:text-2xl my-4'>SECTION 1 - GENERAL CONDITIONS</h2>
                    <p>
                    We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>SECTION 2 - CHANGES TO TERMS OF SERVICE</h2>
                    <p>
                    You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                    </p>
                    <h2 className='text-xl sm:text-2xl my-4'>SECTION 3 - CONTACT INFORMATION</h2>
                    <p>
                    Questions about the Terms of Service should be sent to us at codebhaiya@gmail.com
                    </p>
                   
                </div>
            </div>

        </>
    )
}

export default TermsOfService