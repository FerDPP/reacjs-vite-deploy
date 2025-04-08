import Navbar from "../Components/Navbar.jsx";
import "../Styles/Home.css";
import Footer from "../Components/Footer.jsx";
import { homeSection } from "../Data/HomeSection.jsx";
import Parse from "html-react-parser";
import { courseSection } from "../Data/CourseSection.jsx";
import { tutorsSection, tutorList } from "../Data/TutorsSection.jsx";
import Tutors from "../Components/Tutors.jsx";
import Partners from "../Components/Partners.jsx";
import { partnersSection, partnersList } from "../Data/PartnersSection.jsx";
import Contact from "../Components/Contact.jsx";
import { contactSection } from "../Data/ContactSection.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100"
      >
        <img
          src={homeSection.image}
          alt="Mobil"
          className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
        />
        <div className="kolom md:pl-8">{Parse(homeSection.content)}</div>
      </section>
      {/* Course Section */}
      <section id="courses">
        <div className="kolom">{Parse(courseSection.content)}</div>
        <img src={courseSection.image} />
      </section>
      {/* Tutors Section */}
      <section id="tutors">
        <div className="tengah">
          <div className="kolom">{Parse(tutorsSection.content)}</div>
          <Tutors tutorList={tutorList} />
        </div>
      </section>
      {/* Partner Section */}
      <section id="partners">
        <div className="tengah">
          <div className="kolom">{Parse(partnersSection.content)}</div>
          <Partners partnersList={partnersList} />
        </div>
      </section>

      {/* Contact Section */}
      <Contact contactSection={contactSection} />
      <Footer />
    </div>
  );
}

export default Home;
