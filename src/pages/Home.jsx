import Header from "../components/Header/header";
import Intro from "../components/Intro/section";
import Reprod from "../components/Reproduction/reprod";
import Info from "../components/Info/info";
import Team from "../components/Teams/team";
import Footer from "../components/Footer/footer";

function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Reprod />
      <Info/>
      <Team/>
      <Footer/>
    </>
  );
}

export default Home;