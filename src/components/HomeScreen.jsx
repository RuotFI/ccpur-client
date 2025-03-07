import Hero from '../layout/Hero'
import CollegeActivities from '../layout/CollegeActivities'
import WelcomeScreen from '../layout/WelcomeScreen'
import Advantage from '../layout/Advantage'
import Rankings from '../layout/Rankings'
import Notification from '../layout/Notification'
import ImageGallery from '../layout/ImageGallery'
import Footer2 from '../layout/Footer2'
import Collaboration from '../layout/Collaboration'
import Footer3 from '../layout/Footer3'
import Chatbot from '../layout/Chatbot'
import Options from '../layout/Options'
import PlacementsAndBlogs from '../layout/PlacementsAndBlogs'


const HomeScreen = () => {
  return (
    <div className='overflow-x-hidden scroll-smooth'>
      <Hero />
      <Chatbot />
      <Notification />
      <Advantage />
      <Rankings />
      <PlacementsAndBlogs />
      {/* <Placements /> */}
      <Options />
      <ImageGallery />
      {/* <Blog /> */}
      <Collaboration />
      {/* <About /> */}
      <CollegeActivities />
      <WelcomeScreen />
      {/* <ExistingPassTable /> */}
      {/* <Footer /> */}
      <Footer2 />
      <Footer3 />
    </div>
  )
}

export default HomeScreen
