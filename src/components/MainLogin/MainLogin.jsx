import {useRef} from "react";
import Input from "./Input";
import Modal from "./Modal";
const MainLogin = () => {
  let modalRef = useRef();
  let usernameRef = useRef();
  let passwordRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    /* header and desc will change if the following "errors" occur */
    let header = "Success!";
    let desc = "You have finally logged into your account";

    if (usernameValue.trim() === "" || passwordValue.trim() === "") {
      header = "Empty Values :(";
      desc = "One or more input fields are empty";
    }

    modalRef.current.Open(header, desc);
  };

  return (
    <div className="absolute flex flex-col justify-center items-center p-4 pt-8 min-h-[255px] min-w-[225px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-layered-image bg-cover shadow-inner shadow-green-950 rounded-lg md:translate-x-0 md:translate-y-0 md:static md:w-2/5 md:border-r-4 md:border-r-green-900 md:rounded-none">
      <h1 className="font-semibold text-4xl mb-4 text-green-600 text-center">Welcome Back!</h1>

      <form
        className="flex flex-col gap-1"
        onSubmit={(e) => {
          loginHandler(e);
        }}>
        <Input icon="face" type="username" ref={usernameRef} />
        <Input icon="password" type="password" ref={passwordRef} />
        <button
          className="w-fit self-center hover:font-medium text-green-600 outline-none"
          type="submit">
          Login
        </button>
      </form>

      <Modal header="Hello" desc="Hi" ref={modalRef} />
    </div>
  );
};
export default MainLogin;
