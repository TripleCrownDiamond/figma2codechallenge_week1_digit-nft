import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Collections from "@/components/Collections/Collections";
import Features from "@/components/Features/Features";
import Action from "@/components/Action/Action";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
   <>
    <NavBar />
    <Hero />
    <Collections/>
    <Features />
    <Action />
    <Footer />
   </>
  );
}
