import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const DownloadBroucher = () => {

    const style = {
        border: '1px solid #dfd7d7',
        borderRadius: '20px',
        padding: '10px 20px',
        marginBottom: '15px'
        
    }



    const handleDownload = () => {
        const pdfFile = new Blob(['PDF file content'], { type: 'application/pdf' });   
        const fileName = 'download.pdf'; 
        
        saveAs(pdfFile, fileName);
    }

    
  
    const pdf = 'https://web.medvarsity.com/assets/assets/images/pdf.png'
    const downloadIcon = 'https://web.medvarsity.com/assets/assets/images/save_alt.png'


  return (
    <>
   
             {/* Broucher download */}
             <div className='card_content' style={style}>
                <div className='d-flex align-items-center justify-content-start px-2'>
                    <div className='me-3'>
                        <img style={{width: '20px'}} src={pdf} alt='' />
                    </div>
                    <div>
                        <h6 className='mb-0 me-3' style={{color: '#1e1e1e'}}>Broucher Download</h6>
                    </div>   
                     <div className=''>
                        <img style={{width: '20px', cursor: 'pointer'}} src={downloadIcon} alt='' 
                        onClick={handleDownload} />

                    </div>  

                            
                </div>
             
            </div>




    </>
  )
}

export default DownloadBroucher