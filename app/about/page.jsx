import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutHero from '../../components/AboutHero';
import AboutGoals from '../../components/AboutGoals';
import AboutTeam from '../../components/AboutTeam';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'About Us | Youth For Yoga',
  description: 'Guiding young minds through movement, mindfulness, and balance.',
};

export default function AboutPage() {
  return (
    <div className="page-module__NfDiEG__mainAboutPage">
      <div className="page-module__NfDiEG__aboutPage">
        <Navbar />
        <main>
          <AboutHero />
          <AboutGoals />
          <AboutTeam />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

