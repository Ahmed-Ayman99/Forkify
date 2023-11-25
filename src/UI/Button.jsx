const Button = ({ children }) => {
  return (
    <button className="py-4 px-10 rounded-[100px] font-semibold flex items-center justify-center text-base gap-[10px] border-none uppercase cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#fbdb89] to-[#f48982] text-white hover:scale-110">
      {children}
    </button>
  );
};

export default Button;
