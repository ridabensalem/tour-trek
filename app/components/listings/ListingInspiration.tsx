'use client';
import ButtonElement from "./ButtonElement";

const cards = [
    {
        image: 'https://placehold.co/600x400',
        title: 'The 7 best Orlando hotels for families',
        description: 'Discover the best Orlando hotels for families for your vacation.',
      },
      {
        image: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        title: 'The 6 best Orlando hotels for families',
        description: 'Discover the best Orlando hotels for families for your vacation.',
      },
      {
        image: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        title: '5 best ski towns around the world',
        description: 'Discover a winter wonderland in these charming ski destinations.',
      },
    
  ];
  
  const ListingInspiration = () => {
    const card = cards[0];
    return (
        <div className="px-0 w-[850px] m-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="relative rounded-lg shadow-md overflow-hidden bg-red-500">
                <img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt={card.title} className="w-full h-full object-cover" />
                <div className=" absolute inset-0 flex flex-col justify-end p-4">
                    <h2 className="relative bottom-24 text-3xl font-bold text-white">{card.title}</h2>
                    <p className="relative -top-5 text-base text-zinc-600 dark:text-zinc-300 mt-2">{card.description}</p>
                </div>
            </div>
                    {cards.slice(1).map((card, title, description) => (
                    <div className="rounded-lg shadow-md overflow-hidden ">
                        <img src={card.image} alt={card.title} className="w-full h-46 object-cover rounded-lg" />
                        <div className="p-4 mt-1 ">
                            <h2 className="text-lg font-bold text-black">{card.title}</h2>
                            <p className="text-black dark:text-black mt-2">{card.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <ButtonElement/>
      </div>
    );
  };
  export default ListingInspiration;