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

        <div className="container mx-auto mt-8 text-black">
          <h2 className="text-2xl font-bold mb-4">Tabela de Exemplo</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-left">
                <th className="border-b p-2">ID</th>
                <th className="border-b p-2">Data</th>
                <th className="border-b p-2">Nome</th>
                <th className="border-b p-2">Idade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">001</td>
                <td className="border-b p-2">12/12/2023</td>
                <td className="border-b p-2">João</td>
                <td className="border-b p-2">25</td>
              </tr>
              <tr>
                <td className="border-b p-2">002</td>
                <td className="border-b p-2">12/12/2023</td>
                <td className="border-b p-2">Maria</td>
                <td className="border-b p-2">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
