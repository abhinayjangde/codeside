import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center border dark:border-none h-[5rem] dark:bg-dark dark:text-white w-full sm:px-10 pb-4 pt-4 md:pb-4">
      <div className="flex flex-wrap justify-center items-center md:flex-row gap-2">

        <Link href="/terms" className="hover:text-blue-600">Terms of Services |</Link>
        <Link href="/privacy" className="hover:text-blue-600">Privacy Policy |</Link>
        <Link href="/refund" className="hover:text-blue-600">Refund Policy</Link>

      </div>

      <p>&copy; 2024 <span className="dark:text-white text-black">Codeside™</span> | All Rights Reserved. </p>
    </footer>
  )
}

export default Footer