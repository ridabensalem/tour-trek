'use client';

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
      <div className="Logo_container md:text-2xl ">
      <a className=" font-bold" onClick={() => router.push('/')}> <span className="text-blue-600 ">
      <span className="text-rose-500 ">Tour </span> Trek</span> 
      
      </a>
      </div>
   );
}
 
export default Logo;
