import { useEffect } from "react";
import Hero from "../components/Hero";
import Aos from "aos";
import "aos/dist/aos.css"
import Product from "../components/Products";
import Memories from "../components/Memories";
import FAQ from "../components/FAQ";
import Store from "../components/Store";

export default function Home() {

    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <>
    <Hero />
    <Product />
    <Memories />
    <FAQ />
    <Store />
    </>
  );
}
