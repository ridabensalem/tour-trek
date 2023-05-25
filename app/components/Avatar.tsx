'use client';
import Image from "next/image";
const Avatar =()=>{
return (
    <div className="flex flex-row justify-end">
      <Image alt="avatar" src="/images/avatar.jpg" width={45} height={45} className="rounded-full" />
    </div>
)
}
export default Avatar; 