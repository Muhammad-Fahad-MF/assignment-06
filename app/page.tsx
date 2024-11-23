"use client";
import Head from "next/head";
import Contact from "@/components/contact/contact";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Trust from "@/components/trust/trust";
import Cta from "@/components/cta/cta";
import Achievements from "@/components/achievements/achievements";
import Courses from "@/components/courses/courses";
import Team from "@/components/team/team";
import Testimonial from "@/components/testimonials/testimons";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name" />
      </Head>
      <Contact />
      <Navbar />
      <Banner />
      <Trust />
      <Cta />
      <Achievements />
      <Courses />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}
