import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/home/header/Header";
import { Services } from "@/components/home/services/Services";
import { Specialists } from "@/components/home/specialists/Specialists";
import { Steps } from "@/components/home/steps/Steps";
import { WhyUs } from "@/components/home/whyUs/WhyUs";
import { NavBar } from "@/components/navbar/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="px-4 md:px-6 xl:px-10 max-md:max-w-md max-md:mx-auto overflow-x-hidden">
        <div className="max-w-305 mx-auto relative">
          <Steps />
          <Services />
        </div>
      </div>
      <WhyUs />
      <Specialists />
      <Footer />
    </div>
  );
};
