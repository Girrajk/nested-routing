// import React from 'react'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import ErrorPage from './Components/ErrorPage'
// import Navbar from './Components/Navbar'


// function App() {


//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='*' element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import ErrorPage from './Components/ErrorPage'
import Navbar from './Components/Navbar'

const GoTo = ()=>{
  const navigate = useNavigate();
  return(
    <div>
      {/* <button onClick={()=> navigate("/")}>Go To Home</button> */}
      <button onClick={()=> navigate(1)}>Forward</button>

      <button onClick={()=> navigate(-1)}>Backward</button>
    </div>
  );
};

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <GoTo/>
    </BrowserRouter>
  )
}

export default App