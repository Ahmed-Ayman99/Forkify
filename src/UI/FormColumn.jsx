const FormColumn = ({ heading, children }) => {
  return (
    <div className="grid grid-cols-[1fr_2.5fr] items-center gap-[15px]">
      <h3 className="text-[22.5px] font-bold uppercase mb-[10px] col-span-full">
        {heading}
      </h3>
      {children}
    </div>
  );
};

export default FormColumn;
