import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Head from 'next/head';
import InfoBoxes from '@/components/InfoBoxes';
import Testimonial from '@/components/Testimonial';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ProjectSection from '@/components/ProjectSection';
import Collabrations from '@/components/Collabrations';
export default function Home() {
  return (
    <>
      <Head>
        <title>Google Developer Students Clubs - FETJU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="gdsc.png" type="image/x-icon" />
      </Head>
      <main>
        {/* NavBar */}
        <Nav />
        {/* Hero Section */}
        <Hero />
        {/* Info about events / students */}
        <InfoBoxes />
        {/* Our Team */}
        <Team />
        {/* Past Events */}
        {/* Testimonials */}
        <Testimonial />
        Collaborations
        {/* <Collabrations /> */}
        {/* Idea discussion */}
        <ProjectSection />
        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}
