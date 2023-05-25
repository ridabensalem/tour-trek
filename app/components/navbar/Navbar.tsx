import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
const Navbar = () => {
    return (
    <div className="  w-full  bg-white z-10 shadow-sm border-b-[1px] ">
   <div className="  w-full  flex flex-row justify-between  border-b-[1px] py-3 px-3">
    <Logo />
    <Search />
    <UserMenu />
   </div>
    </div>
    )
}
export default Navbar;