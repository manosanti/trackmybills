export default function Home() {
  return (
    <>
      <main className="container-fluid mt-5">
        <h2 className="text-center text-lg md:text-xl lg:text-2xl xl:text-5xl">
          Olá, seja bem-vindo!
        </h2>

        <div className="grid grid-cols-3 place-items-center	mt-20">
          <div className="bg-green-400 w-8/12 p-2">
            <p className="xl:text-2xl">Entradas</p>
            <p className="xl:text-4xl mt-4">R$ 100.00</p>
          </div>
          <div className="bg-gray-400 w-8/12 p-2">
            <p className="xl:text-2xl">Saldo Atual</p>
            <p className="xl:text-4xl mt-4">R$ 100.00</p>
          </div>
          <div className="bg-rose-500 w-8/12 p-2">
            <p className="xl:text-2xl">Saídas</p>
            <p className="xl:text-4xl mt-4">R$ 100.00</p>
          </div>
        </div>
      </main>
    </>
  );
}
