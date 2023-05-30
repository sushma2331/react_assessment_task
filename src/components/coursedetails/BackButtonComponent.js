import React from 'react';
import { useNavigate} from "react-router-dom";
import '../styles/Style.css'

const BackButtonComponent = () => {
    let navigate = useNavigate();



  return (
    <div>
        <img className='backbtn' onClick={() => navigate(-1)} alt="" src="https://web.medvarsity.com/assets/assets/images/whiteback.png" />
    </div>
  )
}

export default BackButtonComponent