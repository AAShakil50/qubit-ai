import LabelInput from "@/app/components/label-input";
import { IconMathGreater } from "@tabler/icons-react";
import { josefin, kanit } from "@/app/_utils/fonts";

export const LoginForm = () => {

  const login = () => {
    alert("Login Disabled");
  }

  return <form action={login}
    className={`flex flex-grow flex-col justify-center items-center`}
  >
    <div className={`${josefin.className} text-7xl font-bold`}>Login</div>
    <div className={`${kanit.className} my-8 mx-8 flex flex-col`}>
      <LabelInput
        label="Email"
        type="email"
        name="email"
      />
      <LabelInput
        label="Password"
        type="password"
        name="password"
      />
      <button
        type="submit"
        id="password"
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 bg-blue-400 w-full p-4 text-white text-3xl font-bold rounded-md cursor-pointer
          hover:bg-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center"
      >
        <IconMathGreater className="mr-4" stroke={4} width={30} height={30} />{" "}
        Login
      </button>
    </div>
  </form>

};