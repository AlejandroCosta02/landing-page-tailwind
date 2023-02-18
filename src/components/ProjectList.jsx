import React from "react";
import Projectcard from "./Projectcard";
function ProjectList() {
  return (
    <section class="py-10 bg-gray-100">
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Projectcard 
            image='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
            title='Project #1'
            description='Js, React, Node, Express, MongoDB'
        />

        <Projectcard
            image='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'
            title='Project #2'
            description='Js, React, Node, Express, MongoDB'
        />
        <Projectcard
            image='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80'
            title='Project #3'
            description='Js, React, Node, Express, MongoDB'
        />
        <Projectcard
            image='https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            title='Project #4'
            description='Js, React, Node, Express, MongoDB'
        />
        
       
      </div>
    </section>
  );
}

export default ProjectList;
