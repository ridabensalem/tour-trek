'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { differenceInDays } from 'date-fns';
// import;

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const HomeSearch = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  const  startDate = params?.get('startDate');
  const  endDate = params?.get('endDate');
  const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week'
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);

  return ( 
    <div
      onClick={searchModal.onOpen}
      className="
        border-[1px] 
        w-full md:w-auto 
        py-3 
        rounded-full 
        shadow-lg 
        hover:shadow-xl 
        transition cursor-pointer
      "
    >
      <div 
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-lg 
            font-bold
            tracking-wider 
            pr-12
            pl-12
          "
        >
          {locationLabel}
        </div>
        <div 
          className="
            hidden 
            sm:block 
            text-lg 
            font-bold 
            pr-12
            pl-12
            border-x-[1px] 
            flex-1 text-center
          "
        >
          {durationLabel}
        </div>
        <div 
          className="
            text-sm 
            pl-12 pr-6 
            text-gray-600 
            flex flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block text-lg font-bold">{guestLabel}</div>
          <div 
            className="
              p-2 
              bg-blue-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HomeSearch;