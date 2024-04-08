import './App.css'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Expricences/Experience'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project'
import Skill from './Components/Skills/Skill'

function App() {
  

  return (
     <div className='App'>
         <Navbar/>
         <Intro/>
         <Skill/>
         <Project/>
         <Experience/>
         <Contact/>
         <Footer/>
     </div>
  )
}

export default App
