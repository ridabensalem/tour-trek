'use client';
interface TitleProps {
  text: string;
}

const TitleElement: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="mt-6 mb-4">
    <h1 className="text-3xl font-bold text-center">
      {text}
    </h1>
    </div>
  );
}

export default TitleElement;