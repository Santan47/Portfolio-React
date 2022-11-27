import React from 'react'
import AV from '../../assets/pngkey.png'
import './education.css'

const Education = () => {
  return (
    <section id='Education' class="container hvh-100">
      <div className='row align-center hvh-100 p-10'>
        <div className='col-md-8'>
          <div className='page-title'><h3>Education</h3></div>
          <div class="zigzag-timeline__item">
              {/* <!-- Milestone --> */}
              <h4>Kendriya Vidyalaya</h4>
              <p>Passout Year 2013 | CBSE | 8.2 CGPA</p>
              <div className="zigzag-timeline__milestone"></div>
              <div className='eduDetails'>
              My matriculation was completed in 2013 at Kendriya Vidyalaya Lakhisarai, Bihar
                In addition to my 8.2 CGPA, I also have many extra-curricular certificates of accomplishment and good grades.
                
              </div>
          </div>
          <div class="zigzag-timeline__item">
              {/* <!-- Milestone --> */}
              <h4>TLN Inter College</h4>
              <p>Passout Year 2015 | BSEB | 76%</p>
              <div className="zigzag-timeline__milestone"></div>
              <div className='eduDetails'>
              My secondary education was completed in 2015 at TLN Inter College, 
              where I majored in math, physics, and chemistry, and I obtained 72% marks on my 12th grade examination.
              </div>
          </div>
          <div class="zigzag-timeline__item">
              {/* <!-- Milestone --> */}
              <h4>Arya College Of Engg & IT</h4>
              <p>Passout Year 2019 | 67%</p>
              <div className="zigzag-timeline__milestone"></div>
              <div className='eduDetails'>
              In 2019, I graduated from the Arya college of engineering and information technology,
               Jaipur affiliated with Rajasthan Technical University Kota with a degree in computer science.
                While pursuing my Bachelor's, I participated in several events, hackathons, and programming competitions and have been awarded in some as well,
                 including Rajasthan hackathon 2.0, codefest 2018 and topcoder 231. 
              </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='me-graduation text-center'>
            <img src={AV} alt="me" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education