import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Pricelist from "@/components/Pricelist";
import Client from "@/components/Client";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero/>
      <Welcome />
      <Pricelist />
      <Client />
      <ContactUs />
    </>
  );
}
