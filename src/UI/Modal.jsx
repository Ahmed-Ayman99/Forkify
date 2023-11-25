import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

import { useOutsideClick } from '../hooks/useOutsideClick';

const Modal = ({ children, onClose }) => {
  const ref = useOutsideClick(onClose);

  return createPortal(
    <div
      className="
    fixed inset-0 w-screen h-screen backdrop-blur-sm z-1000 transition-all duration-500 bg-black bg-opacity-30 overflow-auto"
    >
      <div
        ref={ref}
        className="absolute top-[50%] left-[50%] w-[80vw] h-[90vh] outline-none bg-white rounded-[9px] py-8 px-10 transition-all duration-500 shadow-sm shadow-slate-900 translate-x-[-50%] translate-y-[-50%] overflow-auto"
      >
        <button
          className="translate-y-[-15px] text-xl rounded-full text-white  font-semibold border-none py-3 px-3 cursor-pointer flex items-center transition-all duration-200 bg-grad2"
          onClick={onClose}
        >
          <HiXMark />
        </button>
        <div className="opacity-1">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
