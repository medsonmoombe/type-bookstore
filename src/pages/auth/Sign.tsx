import { FaRegUser } from "react-icons/fa"

const Sign = () => {
  return (
    <>
      <form className="flex flex-col w-[100%] bg-blend-screen m-auto bg-[url('assets/images/books.jpg')] shadow-lg h-screen  border-0">
        <div className="w-[50%] flex flex-col m-auto gap-2">
        <h1 className="text-sky-600 text-3xl font-semibold font-poppins relative pt-4">Login</h1>
          <div className="flex flex-col gap-2"> 
            <label htmlFor="email" className="font-poppins font-semibold text-start text-sm  text-slate-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="border-2 relative outline-none border-t-0 border-r-0 border-l-0 placeholder:pl-2 placeholder:text-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-poppins font-semibold text-start text-slate-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border-2 outline-none border-t-0 border-r-0 border-l-0 placeholder:pl-2 placeholder:text-xs"
            />
        <button
          type="submit"
          className="w-[50%] bg-sky-600 rounded-full text-white font-poppins m-auto"
        >
          Sign in
        </button>
          </div>
        </div> 
      </form>
    </>
  );
};

export default Sign;
