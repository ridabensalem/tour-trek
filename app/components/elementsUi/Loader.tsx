'use client';

import {BiLoaderAlt} from 'react-icons/bi';

const Loader = () => {
  return ( 
    <div
      className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
    >
      <BiLoaderAlt
        size={50}
        color="red"
        className="animate-spin"
      />
    </div>
   );
}
 
export default Loader;