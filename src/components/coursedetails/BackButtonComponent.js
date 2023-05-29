import React from 'react';
import { useNavigate} from "react-router-dom";

const BackButtonComponent = () => {
    let navigate = useNavigate();

    const style ={
        width: '70%',
        cursor: 'pointer',      
        }

  return (
    <div>
        <img onClick={() => navigate(-1)} style={style} alt="" src="https://web.medvarsity.com/assets/assets/images/whiteback.png" />
    </div>
  )
}

export default BackButtonComponent