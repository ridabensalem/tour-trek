'use client';
'use client';
import {BiSearch} from 'react-icons/bi';
const Search = () => {
    return(
        <div className=" border-b-[1px] rounded-full py-2 shadow-md transition cursor-pointer">
            <div className="flex px-2 gap-4 w-full  font-bold">
                <div className="pt-1 pr-6 pl-6  text-sm text-center ">
                Anywhere
                </div>
                <div className=" pt-1">
                    <div className="text-sm text-center">
                        Any Week
                    </div>
                </div>
                <div className="p-1 pr-6 pl-6">
                    <div className="text-sm text-gray-600 text-center">
                        Add guests
                       
                    </div>
                  
                </div>
                <div className="bg-main-color rounded-full  p-2 text-white">
                            <BiSearch size={18} />
                        </div>
            </div>
        </div>
    )
}
export default Search;