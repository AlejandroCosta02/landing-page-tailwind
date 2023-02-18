import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
function App() {
  return (
    <div className="flex flex-col text-center">
      <Header />
      <section>
        <div className="hero min-h-screen bg-base-200 sm:min-h-12">
          <div className="hero-content text-center ">
            <div className="max-w-md ">
              <h1 className="text-5xl font-bold">
                Creacion de Pagina Web
              </h1>
              <p className="py-6">I’m a front-end developer and co-founder of Codista, a software studio in Vienna. I also write about the web on my blog and elsewhere.</p>
              <progress className="progress w-56"></progress>
            </div>
          </div>
        </div>
      </section>
      
      <ProjectList />
      
     
      <Footer />
    </div>
  );
}

export default App;
