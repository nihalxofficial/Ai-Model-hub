import './App.css'
import Banner from './components/Banner/Banner.'
import Footer from './components/Footer/Footer'
import Models from './components/Models/Models'
import NavBar from './components/Navbar/Navbar'
import { ToastContainer} from 'react-toastify';


const getModels = async() => {
  const res = await fetch("./models.json")
  return res.json()
}

const modelPromise = getModels()
function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
