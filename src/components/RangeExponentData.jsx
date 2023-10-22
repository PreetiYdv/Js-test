import React, { useState } from "react";

const RangeExponentData = () => {
  const [start, setStart] = useState("");
  const [power, setPower] = useState("");
  const [data, setData] = useState(0);
  function Exponent(start, power) {
      let output = 1;
      for (let i = 0; i < power; i++) {
        output *= start;
      }
    setData(output);
}
  const handleSubmit = (e) => {
   setData('')
    e.preventDefault();
    Exponent(start, power);
  };
  return (
    <>
      <section className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <h2 className="text-white text-3xl mb-4 text-center font-semibold">
           Find Exponent of given number
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md  gap-5 px-20 py-10">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="number"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
                <input
                  type="text"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="power"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="border py-1 px-4 text-lg text-white rounded-xl my-5"
              >
                Output
              </button>
              <div className="mt-5 flex flex-wrap">
                <p className="text-white">output :- {data} </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RangeExponentData;
