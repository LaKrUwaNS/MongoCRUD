import NaviBar from '../app/_NaviBar/Navi';

export default function Home() {
  const title = "home";
  return (
    <main className="bg-[rgba(69,69,69,63)] min-h-screen text-white">
      <h1 className="text-center text-4xl">
        <span className='text-[rgba(2,133,57,63)]'>Nextjs</span> + MongoDB
        </h1>
      <NaviBar page={title} />
    </main>
  );
}
