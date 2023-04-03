import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Component from "./Component";
function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path={`/`} element={<Component />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

