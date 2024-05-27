'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { IoIosArrowForward } from "react-icons/io";
import ButtonElement from "./ButtonElement";

const ListingOffer = () => {
  
  const cards = [
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140045887.jpg?k=9e93e30391f0fc96c3d440219034a795149b0bc24908ead4648a7d840910f9e5&o=",
      title: "NAME 1",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=",
      title: "NAME 2",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/236967822.webp?k=767dbb831d2109499cf73d2880a88e021a73781d7206cb812a328fd344756951&o=",
      title: "NAME 3",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=",
      title: "NAME 4",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140045784.jpg?k=ed0d8703d17c4873613106e9d9a10be14820f37b5f9ea02b576c6cd8174a5649&o=",
      title: "NAME 5",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/city/600x600/645577.jpg?k=81d61cb4e120af4d4218386546a117b77ef18dfcf3727d186ec3a1aad60f38fe&o=",
      title: "NAME 6",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/city/600x600/635820.jpg?k=c1aa40108b8fabb9b1218a9ed610e39d1724a81695a8c7cb7bed4e36e9b70f4d&o=",
      title: "NAME 7",
      description: "The description of this place"
    },
    {
      imgSrc: "https://cf.bstatic.com/xdata/images/xphoto/300x240/140045802.jpg?k=7f048b3507c1630fb4b7a0b3f1015750ef7d1cbcc6e4c3f36f309b5843b50044&o=",
      title: "NAME 8",
      description: "The description of this place"
    }
  ];

  return (
    <div className="w-[850px] m-auto space-x-4">
        <Slide slidesToScroll={3} slidesToShow={5} indicators={true}>
          {cards.map((card, index) => (
            <div key={index} className="relative w-86 rounded-lg overflow-hidden ml-2 mr-2">
              <img src={card.imgSrc} alt={card.title} className="w-full h-40 object-cover" />
              <div className="absolute h-[68px] bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 border-1 border-white">
                <h3 className="text-center text-lg font-bold">{card.title}</h3>
                <p className="text-center text-xs">{card.description}</p>
              </div>
            </div>
          ))}
        </Slide>
      <ButtonElement />
    </div>
  );
};

export default ListingOffer;
