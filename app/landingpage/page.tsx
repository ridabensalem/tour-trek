import ListingTrend from "../components/listings/ListingTrend";
import ListingOffer from "../components/listings/ListingOffer";
import ListingInspiration from "../components/listings/ListingInspiration";
import TitleElement from "../components/listings/TitleElement";
import NavBarLandingpage from '@/app/components/navbar/NavBarLandingpage';
import Headline from '../components/navbar/Headline';
import Footer from '../components/navbar/Footer';
import SocialProof from '../components/navbar/SocialProof';


const Page = async () => {
    return (
      <>
        <NavBarLandingpage/>
        <Headline/>
        <TitleElement text="Trending destinations" />
        <ListingTrend/>
        <TitleElement text="Discover the offers" />
        <ListingOffer/>
        <TitleElement text="Get inspiration for your next trip" />
        <ListingInspiration/> 
        <SocialProof/> 
        <Footer />
      </>
  );
}
  
 export default Page;