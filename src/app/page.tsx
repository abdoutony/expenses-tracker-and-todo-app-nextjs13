"use client";
import FormInput from "@/components/form/form-input";
import { loginSchema } from "@/lib/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthError from "@/components/error/auth-error";
import FormButton from "@/components/form/form-button";
export default function Home() {
  const [error, setError] = useState<any>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const session = useSession();

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(loginSchema),
  });
  type FormData = {
    email: string;
    password: string;
  };
  const { errors } = formState;
  const onSubmit = async (formData: FormData) => {
    try {
      setError({});
      if (session.status === "unauthenticated") setIsLoading(true);
      const result: any = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: callbackUrl || "/main",
      });
      const { ok, error, url } = result;
      console.log(result);
      setIsLoading(false);
      if (ok && error === "CredentialsSignin")
        setError({ message: "Bad email or password !" });
      console.log(url);

      if (ok && url) router.push(url);
    } catch (error: any) {
      setError({ message: error.message });
    }
  };
  return (
    <main className="h-screen flex justify-center items-center ">
      <div className="w-1/2 lg:w-1/3">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
          <h1 className="text-3xl font-bold text text-center">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div>
                <FormInput
                  type="email"
                  placeholder="enter your email"
                  register={register}
                  label="email"
                  labelText="Email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <div>
                <FormInput
                  type="password"
                  placeholder="*******"
                  register={register}
                  label="password"
                  labelText="Password"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {error?.message && (
                <AuthError error={error} setError={setError} />
              )}
              <div className="mt-5">
                {isLoading ? (
                  <FormButton
                    type="button"
                    text="Loading"
                    isLoading={true}
                    className=" 
                    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800 
                  "
                    disabled={true}
                  />
                ) : (
                  <FormButton
                    type="submit"
                    text="Login"
                    isLoading={false}
                    className=" 
                    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  dark:bg-blue-600 dark:hover:bg-blue-700
                  dark:focus:ring-blue-800 
                  "
                    disabled={false}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
