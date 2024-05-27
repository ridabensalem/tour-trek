import ClientOnly from "@/app/components/elementsUi/ClientOnly";
import ListingTrend from "../components/listings/ListingTrend";
import ListingOffer from "../components/listings/ListingOffer";
import ListingInspiration from "../components/listings/ListingInspiration";
import TitleElement from "../components/listings/TitleElement";




const LandingPage = async () => {

  return (
    <ClientOnly>
      <TitleElement text="Trending destinations" />
      <ListingTrend/>
      <TitleElement text="Discover the offers" />
      <ListingOffer/>
      <TitleElement text="Get inspiration for your next trip" />
      <ListingInspiration/>
    </ClientOnly>
  );
}

export default LandingPage;
