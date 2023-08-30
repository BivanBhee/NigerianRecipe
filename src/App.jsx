import Home from './pages/Home';
import './assets/style.css'
import './components/Navbar';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';

function App() {

  return (
    <>
        <Home/>
        <Navbar/>
        <Image/>
        <Ingredients/>
        <Instructions/>
    </>
  )
}

export default App
