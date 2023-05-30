import { Route, Routes } from 'react-router-dom';
import WebPage from './components/WebPage';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Books from './components/Books';
import { SearchComponent } from './components/SearchComponent';
import Home from './components/Home';
import Assimilate from './components/Assimilate';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsandConditions from './components/TermsandConditions';
import FinancialSupport from './components/FinancialSupport';
import HelpandSupport from './components/HelpandSupport';
import Cardiology from './components/specialitymenupages/Cardiology';
import Dentistry from './components/specialitymenupages/Dentistry';
import DiabetesMellitus from './components/specialitymenupages/DiabetesMellitus';
import EmergencyMedicine from './components/specialitymenupages/EmergencyMedicine';
import Epidemiology from './components/specialitymenupages/Epidemiology';
import Gastroenterology from './components/specialitymenupages/Gastroenterology';
import Obstetrics from './components/specialitymenupages/Obstetrics';
import Imaging from './components/specialitymenupages/Imaging';
import InternalMedicine from './components/specialitymenupages/InternalMedicine';
import Management from './components/specialitymenupages/Management';
import MentalHealth from './components/specialitymenupages/MentalHealth';
import Nephrology from './components/specialitymenupages/Nephrology';
import Nursing from './components/specialitymenupages/Nursing';
import Oncology from './components/specialitymenupages/Oncology';
import CriticalCare from './components/specialitymenupages/CriticalCare';



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
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsandconditions" element={<TermsandConditions />} />
              <Route path="/financesupport" element={<FinancialSupport />} />
              <Route path="/helpandsupport" element={<HelpandSupport />} />
              <Route path="/cardiology" element={<Cardiology />} />
              <Route path="/criticalcare" element={<CriticalCare />} />
              <Route path="/dentistry" element={<Dentistry />} />
              <Route path="/diabetesmellitus" element={<DiabetesMellitus />} />
              <Route path="/emergencymedicine" element={<EmergencyMedicine />} />
              <Route path="/epidemiology" element={<Epidemiology />} />
              <Route path="/gastroenterology" element={<Gastroenterology />} />
              <Route path="/obstetrics" element={<Obstetrics />} />
              <Route path="/imaging" element={<Imaging />} />
              <Route path="/internalmedicine" element={<InternalMedicine />} />
              <Route path="/management" element={<Management />} />
              <Route path="/mentalhealth" element={<MentalHealth />} />
              <Route path="/nephrology" element={<Nephrology />} />
              <Route path="/nursing" element={<Nursing />} />
              <Route path="/oncology" element={<Oncology />} />

            </Routes>

          {/* <Footer /> */}
    
      
    </div>
  );
}

export default App;