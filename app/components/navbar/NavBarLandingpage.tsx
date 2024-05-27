import { SafeUser } from "@/app/types";

import HomeContainer from "../elementsUi/HomeContainer";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Currency from "../elementsUi/Currency";
import Language from  "../elementsUi/Language";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const NavBarLandingpage: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
          bg-gray-100
        "
      >
      <HomeContainer>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <div className=" 
            ml-auto           
            flex 
            flex-row 
            items-center 
            justify-between
            gap-4
            lg:gap-7
            ">
            <Currency />
            <Language />
          </div>
          <UserMenu currentUser={currentUser} />
        </div>
      </HomeContainer>
    </div>
  </div>
  );
}


export default NavBarLandingpage;