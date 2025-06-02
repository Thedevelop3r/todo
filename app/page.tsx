export default function Home() {
  return (
    <div className="animation-container grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="melting-text-container">
          <h1 className="melting-text">PROGRESS</h1>
        </div>
        <h1 className="text-4xl font-bold tracking-widest text-green-500 shadow-lg rounded-lg px-2 py-1 bg-slate-200 cursor-pointer">Todo</h1>
        <p className='text-white'>
          A full stack <span className='font-bold text-green-500'>Todo</span> application built using nextjs 15, tailwindcss, server actions and <span className='font-bold text-blue-500'>Sequelize ( postgresql )</span>.
        </p>
        <span className='font-bold text-white bg-orange-500 tracking-wider px-2 py-2 rounded-lg shadow-lg cursor-progress'>Development in Progress</span>

      </main>

    </div>
  );
}
