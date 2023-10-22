import React, { useState } from "react";

const Table = () => {
  const [start, setStart] = useState("");
  const [output, setOutput] = useState([]);
  const [end, setEnd] = useState("");

  function generateMathTable(start, end) {
    const tables = [];

    for (let i = parseInt(start); i <= parseInt(end); i++) {
      const table = [];

      for (let j = 1; j <= 10; j++) {
        const result = i * j;
        console.log(j);
          table.push(
            <span key={j} className="text-white">
              {i} x {j} = {result}
            </span>
          );
      }

      tables.push(
        <div key={i} className="table-container">
          <h3 className="text-green-400 font-semibold">Table for {i}</h3>
          <table>
            <tbody>
              {table.map((item) => (
                <tr key={item.key}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    setOutput(tables);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    generateMathTable(start, end);
  };

  return (
    <>
      <section className="min-h-screen bg-[#10111A] py-12">
        <div className="container mx-auto h-full flex justify-center flex-col items-center py-12">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md gap-5 px-20 py-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="starting number"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="end"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="border py-1 px-4 text-lg text-white rounded-xl my-5"
              >
                Output
              </button>
            </div>
          </form>
        </div>
        <div className="container mx-auto">
          <div className="mt-2 flex gap-4 flex-wrap">
            {output.map((table, index) => (
              <div key={index} className="flex">
                {table}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
