"use client"; // Important: Framer Motion runs on the client-side
import NaviBar from "../app/_NaviBar/Navi";
import Button from "./_components/button"



export default function Home() {
  const title = "home";
  return (
    <div className="bg-[#028539] min-h-screen text-white ">
      
      <div className="bg-[#454545] min-h-screen text-white neanimatio ">
        <h1 className="text-center text-4xl">
          <span className="text-[#028539]">Nextjs</span> + MongoDB
        </h1>
        <Button color="#028539" text="Delete" />
      </div>
      <NaviBar page={title} />
    </div>
  );
}
