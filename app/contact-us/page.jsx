import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';

export const metadata = {
  title: 'Contact Us | Youth For Yoga',
  description: 'Every small contribution makes a real difference. Reach out to Youth For Yoga today.',
};

export default function ContactUsPage() {
  return (
    <div className="page-module__IEM2ma__mainContactUsPage">
      <div className="page-module__IEM2ma__contactUsPage">
        <Navbar />
        <main>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

