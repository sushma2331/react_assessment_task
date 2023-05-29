import React from 'react';
import Card from 'react-bootstrap/Card';

const KeyFeatures = (props) => {

    const [title] = ['Key Features']

  return (
    <div className='key_features'>

    <Card className='bg-white border-0' style={{ padding: '25px', borderRadius: '26px', marginBottom:'20px'}}>
          <Card.Body className="p-0">
            <Card.Title className='mb-3'>{title}</Card.Title>
            <Card.Text>
                <ul className='pl-3 mb-0'>
                    <li>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</li>
                    <li>Some quick example text to build on the card title</li>
                    <li>Some quick example text to build on the card title and make up the
                        bulk of the card's content.</li>
                </ul>
            </Card.Text>
        
          </Card.Body>
        </Card>

      
    </div>
  )
}

export default KeyFeatures
