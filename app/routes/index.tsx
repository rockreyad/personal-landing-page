import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "@remix-run/react";
import Toggle from "~/components/Toggle";

export default function Index() {
  return (
    <>
      <div className="bg-white dark:bg-[#1B1A17] flex flex-col h-screen font-Space">
        <div className="text-end p-4">
          <Toggle />
        </div>
        <div className="flex flex-col justify-center h-screen mx-auto">
          <div className="flex flex-col justify-center items-center text-center space-y-4 ">
            <header className="space-y-2 md:space-y-4">
              <h1 className="text-2xl md:text-5xl text-gray-800 dark:text-white primaryText">
                Hello, This is
                <span className="mx-2 font-bold capitalize ">Rasel</span>
              </h1>
              <h6 className="text-sm text-gray-600 dark:text-gray-400">
                i love to do nothin
              </h6>
            </header>
            <main className="flex flex-col items-center space-y-2">
              <div className="w-40">
                <img
                  src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/314034541_196871549461234_7588499687462868712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6VyYQi5TDnzgAo8gBHEjg3HVQpuQPdc7cdVCm5A91zgqzMb0dmcy2IHCLTh4OccRwMK4Sj5iz4OlM1R7A3XYi&_nc_ohc=FZczyx_l0WoAX_qt__J&_nc_ht=scontent.fdac5-1.fna&oh=00_AfDCJCL8LYVKgJtCKBxbM-itPLWgDk0HzOqzmUU5NJr5eg&oe=6387D00C"
                  className="rounded-full"
                  alt="rasel"
                />
              </div>
              <p className="font-light text-indigo-600 dark:text-indigo-200">
                me on social media
              </p>
              <div className="flex space-x-4">
                <Link to={"https://www.facebook.com/101rasel"}>
                  <BsFacebook
                    className="text-2xl text-blue-500 hover:text-blue-600"
                    title="facebook"
                  />
                </Link>
                <Link to={"https://www.instagram.com/rasel.png/"}>
                  <GrInstagram
                    className="text-2xl text-rose-500 hover:text-rose-600"
                    title="instagram"
                  />
                </Link>
                <Link to={"https://twitter.com/rasel_png"}>
                  <AiFillTwitterCircle
                    className="text-2xl text-sky-500 hover:text-sky-600"
                    title="twitter"
                  />
                </Link>
                <Link to={"https://www.linkedin.com/in/rasel-png/"}>
                  <BsLinkedin
                    className="text-2xl text-blue-600 hover:text-blue-800"
                    title="Linkedin"
                  />
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
