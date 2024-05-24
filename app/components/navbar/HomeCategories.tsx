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
import {MdTempleBuddhist} from 'react-icons/md';
import { MdOutlineVilla } from 'react-icons/md';
import {MdHouseboat} from 'react-icons/md';
import {GiHabitatDome} from 'react-icons/gi';

import CategoryBox from "../elementsUi/CategoryBox";
import HomeConatinerCategorie from '../elementsUi/HomeConatinerCategorie';


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'it is near the beach!',
  },
  {
    label: 'Ryokan',
    icon: MdTempleBuddhist,
    description: 'Try a traditional Ryokan!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'You will love this modern property!'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Amazing sights in the country side!'
  },
  {
    label: 'House boat',
    icon: MdHouseboat,
    description: 'Sail away on a house boat!'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Live on an island!'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!'
  },
  {
    label: 'Domes',
    icon: GiHabitatDome,
    description: 'Lovely domes!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'The sense of royalty in this castle!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'Integrate with nature in this cave!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Wonderful camping experience!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: ' Enjoy snowy places !'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Try the life in the desert !'
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'Live in a barn'
  },
  {
    label: 'Tree house',
    icon: GiTreehouse,
    description: 'Enjoy the nature in this tree house! '
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';


  return (
    <HomeConatinerCategorie>
      <div className="dow">
      <Slide slidesToScroll={3} slidesToShow={6} indicators={true} canSwipe={true} >
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