import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import HowTo from "./pages/HowTo";

function App() {
  return (
    <div className=" bg-primary flex flex-col gap-0 xl:gap-20 overflow-x-hidden">
      <Home />
      <AboutUs />
      <HowTo />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
