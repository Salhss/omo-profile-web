import { useEffect } from "react";
import Hero from "../components/Hero";
import Aos from "aos";
import "aos/dist/aos.css"
import Product from "../components/Products";

export default function Home() {

    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <>
    <Hero />
    <Product />
    </>
  );
}
