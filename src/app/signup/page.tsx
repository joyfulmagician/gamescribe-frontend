import { Metadata } from "next";
import ChatBox from "@/components/signup/ChatBox";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "GameScribe- SignUp",
  description: "GameScribe - SignUp",
};

export default function Signup() {
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

      <section className="mt-[100px] flex flex-row items-center justify-around gap-[50px] px-[80px]">
        <div className="flex w-full flex-col gap-[10px] lg:w-2/3">
          <h1 className="whitespace-nowrap text-[52px] font-bold">
            Join Us Today! 🥳
          </h1>

          <p className="mb-[40px] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod empor incididunt ut labore et dolore magna aliqua
          </p>

          <button className="flex h-[48px] w-full flex-row items-center justify-center gap-[20px] rounded-[32px] border border-white font-bold">
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
            <span className="text-[16px] font-normal">Create Password</span>
            <input
              placeholder="**********"
              type="password"
              className="h-[48px] rounded-3xl border border-white bg-transparent px-5"
            />
          </label>

          <div className="mb-[20px] flex flex-row items-center justify-between">
            <label className="flex items-center gap-[10px]">
              <Checkbox className="h-[19px] w-[21.54px] border-[#334155]" />

              <span className="text-[16px] font-normal">
                I agree with{" "}
                <Link href="/terms" className="text-[#7173FA]">
                  Terms & Conditions
                </Link>{" "}
                of GameScribe
              </span>
            </label>
          </div>

          <button className="rounded-[32px] bg-[#7173FA] px-[24px] py-[12px] text-base font-bold">
            Sign Up
          </button>
          <p className="text-center text-[14px]">
            Already have an account?{" "}
            <Link href="/signin" className="ml-[10px] text-[#7173FA]">
              Sign In
            </Link>
          </p>
        </div>

        <div className="hidden h-[745px] w-1/3 px-[10px] lg:block">
          <img
            src="/images/chatbox.jpg"
            className="h-full w-full object-fill"
          />
        </div>
      </section>
    </main>
  );
}
