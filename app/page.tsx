export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-green-500">Todo</h1>
        <p>
          A full stack <span className='font-bold text-green-500'>Todo</span> application built using nextjs 15, tailwindcss, server actions and <span className='font-bold text-blue-500'>Sequelize ( postgresql )</span>.
        </p>
      </main>
    </div>
  );
}
