const Button = ({ children }) => {
  return (
    <div className="bg-white px-3 py-2 flex items-center justify-center bg-white text-black text-base rounded-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-out delay-50">
      {children}
    </div>
  );
};

export default Button;
