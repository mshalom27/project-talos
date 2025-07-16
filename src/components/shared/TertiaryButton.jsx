const TButton = ({ children }) => {
  return (
    <div className="bg-[#3773EC] px-3 py-2 inline-block text-white text-base rounded-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out delay-50">
      {children}
    </div>
  );
};

export default TButton;
