import Head from "next/head";
import { BiCode } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
type Props = {};
const Login = (props: Props) => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <section className="h-screen bg-gradient-to-tl from-[#F4F5FA] to-[#F4F5FA] w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold font-poppins flex items-center gap-2">
            <span className="text-7xl font-bold text-green-400">
              <BiCode />
            </span>
            <span className="text-gray-600 flex items-center gap-2">
              Ashik <span className="text-green-400">Code</span>
            </span>
          </h1>
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Dont have account?{" "}
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Sign up here
              </span>
            </p>

            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <BsEye />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-green-600 text-sm font-semibold leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-500 py-4 w-full"
              >
                Login to my account
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
