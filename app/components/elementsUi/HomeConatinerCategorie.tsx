'use client';

interface ContainerProps {
  children: React.ReactNode
};

const HomeConatinerCategorie: React.FC<ContainerProps> = ({ children }) => {
  return ( 
    <div
      className="
        max-w-[530px]
        mx-auto
      "
    >
      {children}
    </div>
   );
}
 
export default HomeConatinerCategorie;
