import Input from "./Input";
const MainLogin = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center p-4 pt-8 min-h-[255px] min-w-[225px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-layered-image bg-cover shadow-inner shadow-green-950 rounded-lg md:translate-x-0 md:translate-y-0 md:static md:w-2/5 md:border-r-4 md:border-r-green-900 md:rounded-none">
      <h1 className="font-semibold text-4xl mb-4 text-green-600 text-center">Welcome Back!</h1>
      <form className="flex flex-col gap-1">
        <Input icon="face" type="username" />
        <Input icon="password" type="password" />
        <button type="submit" className="w-fit self-center hover:font-medium text-green-950">
          Login
        </button>
      </form>
    </div>
  );
};
export default MainLogin;
