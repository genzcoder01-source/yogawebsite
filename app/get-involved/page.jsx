import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GetInvolvedHero from '../../components/GetInvolvedHero';
import GetInvolvedBenefits from '../../components/GetInvolvedBenefits';
import CTASection from '../../components/CTASection';

export const metadata = {
  title: 'Get Involved | Youth For Yoga',
  description: 'Join the movement: Learn, Inspire & Lead. Help us share the knowledge to the rest of the world, every small step counts!',
};

export default function GetInvolvedPage() {
  return (
    <div className="page-module__QUJBFa__mainGetInvolvedPage">
      <div className="page-module__QUJBFa__getInvolvedPage">
        <Navbar />
        <main>
          <GetInvolvedHero />
          <GetInvolvedBenefits />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

