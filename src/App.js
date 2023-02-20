import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Knowledge from "./components/Knowledge";
function App() {

 
  return (
    <div className="flex flex-col text-center">
      <Header/>
      <section id="hero">
        <div className="hero min-h-screen bg-base-200 sm:min-h-12">
          <div className="hero-content text-center ">
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold">
                Front End Developer
              </h1>
              <p className="py-6">I’m a front-end developer and co-founder of Codista, a software studio in Vienna. I also write about the web on my blog and elsewhere.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ProjectList/>
      <Knowledge />
  
      <Footer />
    </div>
  );
}

export default App;
