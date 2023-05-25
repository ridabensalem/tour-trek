'use client';
'use client';
import {BiSearch} from 'react-icons/bi';
const Search = () => {
    return(
        <div className=" border-[1px] rounded-full  shadow-sm transition cursor-pointer">
            <div className="flex px-2 py-2 gap-6 w-full  items-center font-semibold">
                <div className=" pl-6  text-sm text-center ">
                Anywhere
                </div>
                <div className=" pl-8">
                    <div className="text-sm text-center">
                        Any Week
                    </div>
                </div>
                <div className="pl-8">
                    <div className="text-sm text-main-color text-center">
                        Add guests
                       
                    </div>
                  
                </div>
                <div className=" search_container bg-secondary-color rounded-full text-center    text-white">
                            <BiSearch size={20} />
                        </div>
            </div>
        </div>
    )
}
export default Search;