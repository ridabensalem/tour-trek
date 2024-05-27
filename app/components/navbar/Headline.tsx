import HomeCategories from "./HomeCategories";
import HomeSearch from "./HomeSearch";



const Headline = () => {
  const title = "Welcome to tour trek";
  const text = "Embark on your adventure today – Book your journey now!";

  return (
      <div className="h-full bg-gradient-to-b from-blue-500 to-rose-200">
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-white pb-12" >{text}</p>
            <HomeSearch/>
            <HomeCategories />
        </div>
      </div>
    );
}
 
export default Headline;