
import { BsCodeSlash } from 'react-icons/bs';



const CopyRight = () => {
  return (
    <footer className=" mt-3 text-base py-0 px-4 flex justify-center gap-1 items-center">
      <BsCodeSlash />
      <span>{new Date().getFullYear()}</span> by
      <a
        target="_blank"
        rel="noreferrer"
        className="transition-all duration-300 hover:scale-110 text-primary"
        href="https://www.linkedin.com/in/ahmed-ayman-723605229/"
      >
        Ahmed Ayman
      </a>
    </footer>
  );
};

export default CopyRight;
