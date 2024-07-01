import ContactUs from "@/components/ContactUs";
import Content1 from "@/components/Content1";
import Content2 from "@/components/Content2";
import Detail from "@/components/Detail";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsor";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <Video />
      <Detail />
      <Content1 />
      <Content2 />
      <Sponsor />
      <ContactUs />
      <Footer />
    </>
  );
}
