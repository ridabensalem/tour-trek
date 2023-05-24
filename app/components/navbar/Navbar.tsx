import Logo from "./Logo";
import Search from "./Search";
const Navbar = () => {
    return (
    <div className=" fixed w-full bg-white z-10 shadow-sm">
   <div className=" container  w-full flex flex-row justify-between border-b-[1px] py-4 px-2">
    <Logo />
    <Search />
   </div>
    </div>
    )
}
export default Navbar;