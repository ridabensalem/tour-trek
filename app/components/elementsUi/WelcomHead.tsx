const WelcomHead = () => {
    const title = "Centered Title";
    const text = "This is a centered paragraph under the title.";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
        <p className="text-lg text-black">{text}</p>
        </div>
      );
};

export default WelcomHead;
