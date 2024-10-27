'use client'
import React, { useEffect } from 'react'

const PrivacyPolicy:React.FC = () => {
    useEffect(() => {
        document.title = 'Privacy Policy - The right way to learn coding'
    }, [])
    return (

        <div className='dark:bg-dark py-5 bg-gray-50 p-4'>
            <div className="max-w-screen-lg mx-auto bg-white dark:text-white dark:bg-black/[0.3]  rounded-lg shadow-md p-6 lg:p-10">

                <h1 className="text-center text-2xl md:text-3xl justify-center lg:text-4xl font-semibold text-gray-800 dark:text-white mb-2 flex border-b pb-2">Privacy Policy</h1>
                <p className='bg-slate-200 text-center dark:bg-slate-800 mb-2 px-2 py-1 md:inline-block'>Last updated: April 25, 2024</p>
                <p>
                    Our Privacy Policy outlines how Code Bhaiya (We/us) handles your privacy while you use our website www.codebhaiya.com (Website). It explains our current procedures for collecting, storing, using, and securing your personal information on our Website. Additionally, it clarifies your options for accessing, correcting, and using your personal data, as well as the steps for addressing grievances or complaints. By accessing www.codebhaiya.com, you agree to comply with the terms and conditions set forth in this Privacy Policy. We advise you to carefully review this Policy, as your use of the Website signifies your understanding and acceptance of its terms. If you do not agree with the terms and conditions of this Privacy Policy, please refrain from accessing the Website. We are committed to periodically reviewing and updating this Privacy Policy. Please note that as a visitor, you acknowledge that this Policy may change without prior notice. To stay informed about any changes, we recommend reviewing this Policy regularly. For the purposes of this Policy, (Personal Data) refers to any information that can identify you directly or indirectly as an individual.
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                <p>
                    When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer&apos;s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. Email marketing: With your permission, we may send you emails about our store, new products and other updates.
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 2 - CONSENT</h2>
                <p>How do you get my consent?</p>
                <p>

                    When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
                </p>
                <p>
                    How do I withdraw my consent?
                </p>

                <p>

                    If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at [codebhaiya@gmail.com].
                </p>

                <h2 className='text-xl sm:text-2xl my-4'>SECTION 3 - DISCLOSURE</h2>
                <p>
                    We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 4 - PAYMENT</h2>
                <p>
                    We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 5 - SECURITY</h2>
                <p>
                    To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.

                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 6 - COOKIES</h2>
                <p>
                    We use cookies to maintain session of your user. It is not used to personally identify you on other websites.
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 7 - AGE OF CONSENT</h2>
                <p>
                    By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                </p>
                <h2 className='text-xl sm:text-2xl my-4'>SECTION 8 - CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                    We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                </p>

            </div>
        </div>

    )
}

export default PrivacyPolicy