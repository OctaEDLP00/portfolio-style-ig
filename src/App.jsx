import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Hobbies from './components/Hobbies/Hobbies'
import Proyects from './components/Proyects/Proyects'
import Tecnologies from './components/Tecnologies/Tecnologies'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Hobbies />
      <Proyects />
      <Tecnologies />
      <Footer />
    </div>
  )
}
