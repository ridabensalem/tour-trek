'use client';
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();             
    return (
   <div className="logo font-bold  pt-2 text-2xl">
    <span className="text-main-color">Tour</span>
      <span className="text-secondary-color"> Trek</span>
      </div>

    );
}
export default Logo;