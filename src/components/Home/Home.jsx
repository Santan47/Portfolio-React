import React from 'react'
import './home.css'
import ME from '../../assets/me.png'
import AV from '../../assets/pngkey.png'
// import AV from '../../assets/userpng.png'
import CTA from './CTA'

const Home = () => {
  let skillSets = ["HTML","CSS3","JavaScript","Python","C#",
  "ASP.Net","React","Angular7","Django","Git","HTML","CSS3","JavaScript","Python","C#"];

  return (
    <section id='Home' className='container hvh-100'>
      <div className='row align-center hvh-100'>
        <div className='col-md-4'>
          <div className='me text-center'>
            <img src={AV} alt="me" />
            <div className=''>
            <h3>Santan Kr Sharma</h3>
            <h9>Software Developer</h9>
            <CTA/>
          </div>
          </div>
          
        </div>
        <div className='col-md-8'>
          <div>
            <h1>Hi,</h1>
            <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          
          <div className='sParent container'>
            <div>
              <h5 id="skills" className='hide'>
              Skills:
            </h5>
            </div>
            <div className='row'>
              {skillSets.map(skills => (
                <span className='skill-tag'>{skills}</span>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home