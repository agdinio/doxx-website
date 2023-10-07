import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import CMS from "./pages/CMS";
import FooterPage from "./pages/FooterPage";
import Gallery from "./pages/Gallery";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          {/*<Route path="/touch" element={<TouchFullscreenScrolling/>}/>*/}
            <Route path="gallery" element={<Gallery/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="/cms" element={<CMS/>}/>
          <Route path="/footer" element={<FooterPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
