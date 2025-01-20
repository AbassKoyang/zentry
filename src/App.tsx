import Hero from './components/Hero';
import About from './components/About';
import NavBar from './components/NavBar';
import Features from './components/Features';
import Story from './components/Story';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import Vault from './components/Vault';
import Discover from './components/Discover';
import Stats from './components/Stats';
import Partners from './components/Partners';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      {/* <Contact /> */}
      {/* <Footer /> */}
      <Vault />
      <Discover />
      <Stats />
      <Partners />
    </main>
  )
}

export default App;