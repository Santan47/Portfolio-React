import React from 'react'
import './project.css'

const Project = () => {
  let projectsJson = [
    {
      "title": "Word Dictionary",
      "desc": "Word Dictionary in Django, This dictionary contain millions of word it will give you all information regarding the word with Phonetics,Pronunciation,Defination and Examples.",
      "link": "https://scarletx47.pythonanywhere.com/",
      "img":"../asstes/dict.png"
    },
    {
      "title": "Into The Sky",
      "desc": "The objective of this site is to make NASA data, including imagery, eminently visible to all. Data is fetched direct from NASA API's.",
      "link": "https://santan47.github.io/IntoTheSky/",
      "img":"../asstes/nasa.png"
    },
    {
      "title": "Color Picker",
      "desc": "Fast and decorated color piker for building good UI and developer friendly, Its ease the task of picking colors for UI.",
      "link": "https://santan47.github.io/Color-Picker",
      "img":"../asstes/colorpiker.png"
    },
    {
      "title": "Word War",
      "desc": "It is a mobile app developed in Django python you can post any poetries or gazals there and store it as your content.",
      "link": "https://github.com/Santan47/WordWar-Django",
      "img":"../asstes/dummy.png"
    }
  ]

  return (
    <section id='Projects' className='container hvh-100 p-10'>
      <div className='page-title'><h3>Projects</h3></div>
      <div className='row'>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
        <div className='p_card'>
          <div className='tag'>
            tag
          </div>
          <div className='title'>
            project name
          </div>
          <div className='cardDesc'>
          Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts,
           and discover plugins for your favorite writing, design and blogging tools. 
           Explore the origins, history and meaning of the famous passage,
           and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.
          </div>
          <div class="course-card--bottom">
              <a href="https://careerfoundry.com/en/courses/become-a-digital-marketer/" class="ds-button__tertiary cta-button cta-button-program-tracking cta-button-program-tracking-digital-marketing">
                View program 
              </a>
          </div>
        </div>
      </div>
      <div className='page-title text-center'><h3>Coming Soon...</h3></div>
    </section>
  )
}

export default Project