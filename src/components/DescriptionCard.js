import React from 'react';
import Card from 'react-bootstrap/Card';

const DescriptionCard = (props) => {

    const [title] = ['Description']

  return (
    <div className='description_card'>

    <Card className='bg-white border-0' style={{ padding: '25px', borderRadius: '26px', marginBottom:'20px'}}>
          <Card.Body className="p-0">
            <Card.Title className='mb-3'>{title}</Card.Title>
            <Card.Text>
                <p>
                The <b>Fellowship in Clinical Cardiology – Level II</b> marks your entry into the prestigious field of cardiology. Cardiac disease is the most common cause of global mortality. Thus, there is a huge demand for medical graduates and general practitioners with a deep understanding of cardiology topics. </p>

                <p>This course is the final step in becoming a cardiology expert and addresses the pathophysiological basis, clinical features, diagnosis, and evidence-based medical management for major cardiac diseases, permitting you to administer the optimum care to cardiac cases. The experience of 3 months of practical training in a leading corporate hospital guided by expert cardiologists gives you a much-needed clinical experience.</p>

                <p>Learning complex medical concepts in the traditional didactic textbook and lecture format can be alienating for students. It prevents the opportunity to apply this knowledge clinically.</p>

                <p><b>Fellowship in Clinical Cardiology – Level II</b>  incorporates a Case-Based Learning Approach within the Medvarsity Learning Framework to address this gap in medical education. With this unique methodology, students consume relevant medical content while learning concepts through interactive case studies spread throughout the course. Thus, students are provided with relevant specialty-specific cases and a clear structure for precise diagnosis and customized treatment plans on a case-to-case basis.
                </p>
                <p>
                We at Medvarsity strive to equip every physician with <b>the ability to fast-track their career</b> and enable them to better serve the communities in which they practice. Join us, and let us impact healthcare through education.

                </p>
                <ul className='pl-3 mb-0'>
                    <li>Simulation Training on Ecg and Chest Pain Essentials</li>
                    <li>Simulation Training on AHA-certified Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)
                    </li>
                    <li>Simulation Training on Basics of Percutaneous Coronary Intervention</li>
                    <li>Simulation Training on Ecg and Chest Pain Essentials</li>
                </ul>
            </Card.Text>
        
          </Card.Body>
        </Card>

      
    </div>
  )
}

export default DescriptionCard
