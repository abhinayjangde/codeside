import HeroSection from "@/components/HeroSection"
import PlatformFeatures from "@/components/PlatformFeatures"
import SupportedLanguages from "@/components/SupportedLanguages"
import Testimonial from "@/components/Testimonial"


const Home:React.FC = () => {
 
  return (
    <>
    
    <HeroSection/>
    <SupportedLanguages/>
    <PlatformFeatures/>
    <Testimonial/>
    </>
  )
}

export default Home