import Header from "../common/components/Header";
import Hero from "../common/components/Hero";
import Footer from "../common/components/Footer";
import Features from "../common/components/Features";

function Home() {
  return (
    <>
      {/* ajouter Provider Redux */}
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}

export default Home;
