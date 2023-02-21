import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Knowledge from "./components/Knowledge";
import ContactForm from "./components/ContactForm";
function App() {

 
 
  return (
    <div className="flex flex-col text-center">
      <Header />
      <section id="hero">
        <div className="hero min-h-screen bg-base-200 sm:min-h-12 md:h-screen">
          <div className="hero-content text-center ">
            <div className="max-w-lg ">
              <h1 className="text-5xl font-bold">
              Designer, Frontend Developer and Self-taught Programmer
              </h1>
              <p className="py-6">I’m a front-end developer and co-founder of Codista, a software studio in Vienna. I also write about the web on my blog and elsewhere.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Knowledge />
      <ProjectList/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
