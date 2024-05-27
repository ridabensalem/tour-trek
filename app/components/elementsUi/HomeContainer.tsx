'use client';

interface ContainerProps {
  children: React.ReactNode
};

const HomeContainer: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
        max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4
      "
      style={{ paddingLeft: '130px', paddingRight: '130px' }}
    >
      {children}
    </div>
   );
}
 
export default HomeContainer;
