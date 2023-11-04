import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {createPortal} from "react-dom";

const Modal = forwardRef((props, ref) => {
  let modalRef = useRef();

  let [header, setHeader] = useState("N/A");
  let [desc, setDesc] = useState("N/A");

  useImperativeHandle(ref, () => {
    return {
      Open(header, desc) {
        modalRef.current.showModal();
        setHeader(header);
        setDesc(desc);
      },
    };
  });

  return createPortal(
    <dialog
      ref={modalRef}
      className="w-1/3 max-w-[300px] min-w-[200px] h-fit pb-2 rounded-xl flex flex-col items-center bg-gradient-to-b from-green-600 to-green-800 backdrop:bg-black backdrop:opacity-25">
      <h2 className="font-semibold text-3xl py-1 bg-green-900 w-full text-center bg-gradient-to-b from-green-700 to-green-900 ">
        {header}
      </h2>
      <p className="font-medium text-center">{desc}</p>
      <form method="dialog" className="flex flex-col flex-1 justify-end">
        <button className="absolute top-1 right-1 outline-none">
          <span className="material-symbols-outlined">cancel</span>
        </button>
      </form>
    </dialog>,
    document.querySelector("#modals")
  );
});

export default Modal;
