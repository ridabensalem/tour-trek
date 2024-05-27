'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain } from 'react-icons/tb';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiTreehouse
} from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { MdTempleBuddhist, MdOutlineVilla, MdHouseboat } from 'react-icons/md';
import { GiHabitatDome } from 'react-icons/gi';

import CategoryBox from "../elementsUi/CategoryBox";
import HomeConatinerCategorie from '../elementsUi/HomeConatinerCategorie';
import React, { useState } from 'react';

export const categories = [
  { label: 'Beach', icon: TbBeach, description: 'it is near the beach!' },
  { label: 'Ryokan', icon: MdTempleBuddhist, description: 'Try a traditional Ryokan!' },
  { label: 'Modern', icon: MdOutlineVilla, description: 'You will love this modern property!' },
  { label: 'Countryside', icon: TbMountain, description: 'Amazing sights in the country side!' },
  { label: 'House boat', icon: MdHouseboat, description: 'Sail away on a house boat!' },
  { label: 'Islands', icon: GiIsland, description: 'Live on an island!' },
  { label: 'Lake', icon: GiBoatFishing, description: 'This property is near a lake!' },
  { label: 'Domes', icon: GiHabitatDome, description: 'Lovely domes!' },
  { label: 'Castles', icon: GiCastle, description: 'The sense of royalty in this castle!' },
  { label: 'Caves', icon: GiCaveEntrance, description: 'Integrate with nature in this cave!' },
  { label: 'Camping', icon: GiForestCamp, description: 'Wonderful camping experience!' },
  { label: 'Arctic', icon: BsSnow, description: ' Enjoy snowy places !' },
  { label: 'Desert', icon: GiCactus, description: 'Try the life in the desert !' },
  { label: 'Barns', icon: GiBarn, description: 'Live in a barn' },
  { label: 'Tree house', icon: GiTreehouse, description: 'Enjoy the nature in this tree house! ' }
];

const Categories = () => {
  const [isHovered, setIsHovered] = useState(false);
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    marginTop: '50px',
    display: isHovered ? 'block' : 'none'
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const properties = {
    prevArrow: (
      <button style={buttonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 2000" fill="#fff">
          <path d="M252 670c17.333 17.333 17.333 33.333 0 48-17.333 17.333-33.333 17.333-48 0L12 524c-16-16-16-32.667 0-50l192-194c14.667-17.333 30.667-17.333 48 0 17.333 14.667 17.333 30.667 0 48L96 500l156 170" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={buttonStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 2000" fill="#fff">
          <path d="M13 670l158-170L13 328c-17.333-17.333-17.333-33.333 0-48 17.333-17.333 33.333-17.333 48 0l192 194c16 17.333 16 34 0 50L61 718c-14.667 17.333-30.667 17.333-48 0-17.333-14.667-17.333-30.667 0-48"/>
        </svg>
      </button>
    )
  };

  return (
    <HomeConatinerCategorie>
      <div 
        className="dow" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Slide {...properties} slidesToScroll={3} slidesToShow={6} indicators={true} canSwipe={true}>
          {categories.map((item) => (
            <CategoryBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </Slide>
      </div>
    </HomeConatinerCategorie>
  );
}

export default Categories;
