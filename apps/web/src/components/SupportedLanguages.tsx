import Image from 'next/image'
const SupportedLanguages: React.FC = () => {
   const languages = ['C.svg', 'Csharp.svg', 'go.svg', 'Java.svg', 'js.svg', 'Ruby.svg', 'C++.svg', 'python.svg']
   return (
      <section className="h-fit w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center py-10">

         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]">
         </div>
         <div className="flex flex-col items-center text-center gap-4">
            <div className="text-5xl font-bold">Supported <span className="text-[#4E7AFF]">Languages</span></div>
            <div className="text-md text-gray-900 dark:text-gray-300 w-full">Solve problems in your preferred language with Algorithmic Arena, offering a wide range of programming language options.</div>
            <div className="flex flex-wrap justify-center bg-white shadow-md dark:bg-dark/[0.8] gap-2 rounded-md p-2">
               {languages.map((lang: string, index: number) => <Image width={50} height={50} key={index} src={`/lang/${lang}`} alt="lng icons" />)}

            </div>
            <div>& Many More</div>
         </div>
      </section>
   )
}

export default SupportedLanguages