import {forwardRef} from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex items-center bg-green-500 shadow-md conf px-2 pb-0.5 gap-1 rounded-md min-h-[45px]">
      <span className="material-symbols-outlined text-green-900 text-3xl w-6">{props.icon}</span>
      <input
        className="min-h-full pl-1 bg-transparent rounded focus:shadow-md transition duration-150 placeholder:text-green-600"
        placeholder={`Enter your ${props.type}`}
        type="text"
        ref={ref}
      />
    </div>
  );
});
export default Input;
