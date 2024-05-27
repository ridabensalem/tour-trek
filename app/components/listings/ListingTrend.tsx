'use client';
import { ImLocation } from "react-icons/im";
import ButtonElement from "./ButtonElement";

const destinations = [
    {
      image: 'https://xx.bstatic.com/xdata/images/xphoto/1182x887/241122381.jpg?k=7a4a43ec9507a233ae6652207529a2f600b63d07f91cc9da0947403cbec11a2c&o=?size=M',
      location: 'Chefchaouen, Morocco',
      description: 'Here is a small presentation at this place',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/225084278.webp?k=ffc3291f7c36f8f0c8d245e83a22350ca05b8a7f94bf1f51447a02787b42d699&o=',
      location: 'Hong Kong, China',
    },
    {
      image: 'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=',
      location: 'Kuala Lumpur',
    },
    {
      image: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
      location: 'Hong Kong, China',
    },
    {
      image: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=',
      location: 'Seoul, South Korea',
    },
    
  ];
  
  const ListingTrend = () => {
    // const locationUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.location)}`;
    const destination = destinations[0];
    return (
      <div className="w-[850px] m-auto">

        <div className="grid lg:grid-cols-2  ">
            <div className="relative rounded-lg overflow-hidden shadow-lg w-[410px] h-[400px] ">
              <img src={destination.image} alt={destination.location} className="rounded-lg w-full h-[400px] object-cover" />
              <a
                // href={locationUrl}
                href={"googlemaps.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute top-4 left-2 bg-zinc-800 bg-opacity-75 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                    <span aria-label="location"><ImLocation /></span> 
                    <span>{destination.location}</span>
                  
                </div>
              </a>
              {destination.description && (
                <div className="absolute bottom-8 left-3 bg-zinc-800 bg-opacity-75 text-white px-3 py-1 rounded-lg ">
                  {destination.description}
                </div>
              )}
            </div>

                <div className="relative grid lg:grid-cols-2 gap-y-4  w-[450px]">
                      {destinations.slice(1).map((destination, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg w-[200px]">
                    <img src={destination.image} alt={destination.location} className="w-full h-48 object-cover" />
                    <a
                      href={"https://googlemaps.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute top-2 left-2 bg-zinc-800 bg-opacity-75 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-2">
                        <span aria-label="location"><ImLocation /></span>
                        <span>{destination.location}</span>
                      </div>
                    </a>
                    {destination.description && (
                      <div className="absolute bottom-2 left-2 bg-zinc-800 bg-opacity-75 text-white px-3 py-1 rounded-lg text-xs">
                        {destination.description}
                      </div>
                    )}
                  </div>
                ))}
                </div>
        </div>
        <ButtonElement/> 
      </div>
    );
  };
  export default ListingTrend;