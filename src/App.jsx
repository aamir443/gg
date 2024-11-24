import About from "./component/About";
import Hero from "./component/Hero";
import NavBar from "./component/Navbar";
import Features from "./component/Features";
import Story from "./component/Story";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  // hi
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
