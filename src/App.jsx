import './App.css'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Skill from './pages/Skill/Skill'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import TapeDesign from './components/TapeDesign/TapeDesign'
// for animation
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {


  AOS.init();



  return (

    <div className='dark:bg-[--primary-color] dark:text-[--font-color] pb-5 '>
      <Header />
      <Home />
      <TapeDesign />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
