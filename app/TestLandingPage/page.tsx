import NavBarLandingpage from '@/app/components/navbar/NavBarLandingpage';
import Headline from '../components/navbar/Headline';
import Footer from '../components/navbar/Footer';
import SocialProof from '../components/navbar/SocialProof';

const Page = async () => {

    return (

      <>
        <NavBarLandingpage/>
        <Headline/>
        <SocialProof/>
        <Footer />
        
      </>

    );
  }
  
  export default Page;