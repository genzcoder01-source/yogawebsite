import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgramsHero from '../../components/ProgramsHero';
import ProgramsList from '../../components/ProgramsList';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Programs & Offerings | Youth For Yoga',
  description: 'Programs Designed for Every YOGI. From beginner classes to leadership programs — find the right fit.',
};

export default function ProgramsPage() {
  return (
    <div className="page-module__vFwY_q__mainProgramsPage">
      <div className="page-module__vFwY_q__programsPage">
        <Navbar />
        <main>
          <ProgramsHero />
          <ProgramsList />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

