
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Ours from "../components/Ours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePages({ setModalType }) {
  return (
    <>
     <Menu setModalType={setModalType} />
     <Banner />
     <div className="w3-content" style={{"maxWidth":"1532px"}}>
      <Rooms />
      <About />
      <Ours />
      <Contact />
     </div>
     <Footer />
    </>
  )
}
