
import { Route, Routes } from 'react-router-dom';
import WebPage from './components/WebPage';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Books from './components/Books';
import { SearchComponent } from './components/SearchComponent';
import Home from './components/Home';
import Assimilate from './components/Assimilate';


function App() {
  return (

    <div className="App">     
        {/* <WebPage /> */}
        

        {/* Routing */} 
        {/* <Header /> */}
          <Routes>            
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/assimilate" element={<Assimilate />} />
              <Route path="/books" element={<Books />} />
              <Route path="/search" element={<SearchComponent />} />
            </Routes>

          {/* <Footer /> */}
    
      
    </div>
  );
}

export default App;
