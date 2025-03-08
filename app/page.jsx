import Services from "@components/Services";
import Hero from "@components/Hero";
import Packages from "@components/Packages";
import TopFixers from "@components/TopFixers";
import ContactUs from "@components/ContactUs";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <section className="w-full h-full ">
      <Hero />
      <Services />
      <Packages />
      <TopFixers />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
