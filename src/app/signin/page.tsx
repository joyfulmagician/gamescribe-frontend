import { Metadata } from "next";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "GameScribe - SignIn",
  description: "GameScribe - SignIn",
};

export default function Signin() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#050618] py-[40px] text-white"
      style={{
        backgroundImage: "url('/images/bg-signin.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="ml-[90px]">
        <Logo />
      </section>

      <section className="mt-[50px] flex flex-row items-center justify-around gap-[50px] px-[80px] md:mt-[80px] lg:mt-[30px] xl:mt-[10px]">
        <img
          src="/images/signin.png"
          alt="signin"
          className="hidden w-1/2 max-w-[710px] px-[10px] lg:block"
        />

        <div className="flex w-full flex-col gap-[10px] lg:w-1/2">
          <h1 className="whitespace-nowrap text-[52px] font-bold">
            Welcome back! 👋
          </h1>

          <p className="mb-[40px] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod empor incididunt ut labore et dolore magna aliqua
          </p>

          <button className="flex h-[48px] w-full flex-row items-center justify-center gap-[20px] rounded-3xl border border-white font-bold">
            <img src="/images/google_icon.svg" />
            <span>Continue with Google</span>
          </button>

          <label className="flex h-[84px] flex-col gap-[10px]">
            <span className="text-[16px] font-normal">First & Last Name</span>
            <input
              placeholder="Chris Vaccaro"
              className="h-[48px] rounded-3xl border border-white bg-transparent px-5"
            />
          </label>

          <label className="flex h-[84px] flex-col gap-[10px]">
            <span className="text-[16px] font-normal">Email Address</span>
            <input
              placeholder="chrisvaccaro@gmail.com"
              className="h-[48px] rounded-3xl border border-white bg-transparent px-5"
            />
          </label>

          <label className="flex h-[84px] flex-col gap-[10px]">
            <span className="text-[16px] font-normal">Password</span>
            <input
              type="password"
              placeholder="**********"
              className="h-[48px] rounded-3xl border border-white bg-transparent px-5"
            />
          </label>

          <div className="mb-[20px] flex flex-row items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox className="h-[19px] w-[21.54px] border-[#334155]" />
              <label className="mt-px cursor-pointer select-none text-[16px] font-light text-white">
                Remember me
              </label>
            </div>

            <Link href="reset" className="text-[16px] text-[#7173FA]">
              Forgot password?
            </Link>
          </div>

          <button className="rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base font-bold">
            Login
          </button>

          <p className="mt-[10px] text-center text-[14px]">
            Don't have an account?
            <Link href="/signup" className="ml-[10px] text-[#7173FA]">
              Create free account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
