const FormRow = ({ children, label, htmlfor }) => {
  return (
    <>
      <label htmlFor={htmlfor} className="text-inherit font-medium text-base">
        {label}
      </label>
      {children}
    </>
  );
};

export default FormRow;
