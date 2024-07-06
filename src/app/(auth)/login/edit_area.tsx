"use client"

import LabelInput from "@/app/components/label-input";
import { IconMathGreater } from "@tabler/icons-react";

export const LoginFormFields = () => {
    return <><LabelInput
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
    </>
};