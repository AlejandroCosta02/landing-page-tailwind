import React from "react";
import Projectcard from "./Projectcard";
import project_1 from '../Images/project_1.png'
import project_2 from '../Images/project_2.png'
import project_3 from '../Images/project_3.png'
import project_4 from '../Images/project_4.png'
function ProjectList(props) {
  return (
    <section  className="py-10 bg-gray-100">
      <div id='project' className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Projectcard 
            image={project_1}
            title='Wedding Invitation'
            description='HTML, Js, Css, Sass'
        />

        <Projectcard
            image={project_2}
            title='Weather App'
            description='React Js, OpenWeather API, Axios, React Hooks, React Router, React Context, React Bootstrap'
        />
        <Projectcard
            image={project_3}
            title='Rick & Morty API'
            description='React js, API, css, Js, Pico.css, React Hooks'
        />
        <Projectcard
            image={project_4}
            title='Poke-Api'
            description='ReactJs, Tailwind, DaisyUI, Api, css'
        />
        
       
      </div>
    </section>
  );
}

export default ProjectList;
