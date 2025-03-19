"use client"

import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verify: React.FC = () => {
  const router = useRouter();

  const handleVerification = async (formData: FormData) => {
    const verificationCode = formData.get("verificationCode") as string;

    if (!verificationCode) {
      toast.warn("Verification code is required.");
      return;
    }

    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        body: JSON.stringify({ verificationCode }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email verified successfully.");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        toast.error(data.message || "Verification failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during verification.");
    }
  };

  return (
    <div className="py-16 md:py-32 dark:bg-black md:dark:bg-dark ">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <div className="flex bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center uppercase">
            Verify Your Email
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center">Enter the verification code sent to your email.</p>

          <form onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleVerification(formData);
          }}>
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
                Verification Code
              </label>
              <input
                className="bg-gray-200 text-gray-700 dark:bg-dark dark:text-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                id="verificationCode"
                name="verificationCode"
              />
            </div>

            <div className="mt-8">
              <button type="submit" className="border-[1px] text-white border-gray-600 px-4 py-2 font-bold w-full rounded-sm bg-gray-700 hover:bg-gray-600">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Verify;