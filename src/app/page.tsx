import Image from "next/image";
import styles from "./page.module.css";
import HomeContent from "@/components/HomeContent";
import About from "./about/page";
import Foods from "./foods/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div>
      <HomeContent/>
      <About/>
      <Foods/>
      <Contact/>
    </div>
  );
}
