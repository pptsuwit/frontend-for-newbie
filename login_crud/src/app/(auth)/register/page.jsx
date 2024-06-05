"use client";

import { authService } from "@/services/auth.service";
import httpService from "@/utils/axios";

import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { message } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/zodSchema/registerSchema";
import Input from "@/components/Input";
export default function page() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  async function onSubmit(data) {
    const register = {
      username: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    };
    try {
      await authService.register(register).then(async (item) => {
        messageApi.open({
          type: "success",
          content:
            "Congratulations, your account has been successfully created.",
        });
      });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  }

  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-lg w-full sm:w-96">
          <h1 className="text-5xl text-center text-blue-600 font-semibold mb-6">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                register={register("firstName", { required: true })}
                errors={errors}
              ></Input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                register={register("lastName", { required: true })}
                errors={errors}
              ></Input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                register={register("email", { required: true })}
                errors={errors}
              ></Input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                register={register("password", { required: true })}
                errors={errors}
              ></Input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                register={register("confirmPassword", { required: true })}
                errors={errors}
              ></Input>
            </div>
            <div className="mb-4 ">
              <button
                className="w-full focus:border-blue-400 focus:border-2 shadow
              bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 font-bold">
              If you already have an account?{" "}
              <a href="/login" className="text-indigo-500 hover:underline">
                Back to login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
