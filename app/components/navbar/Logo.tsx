'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
      
      <h1 className="text-2xl font-bold" onClick={() => router.push('/')}> 
      <span className="text-rose-500 ">Tour </span> 
      <span className="text-blue-600 ">Trek</span> 
      </h1>
   );
}
 
export default Logo;
