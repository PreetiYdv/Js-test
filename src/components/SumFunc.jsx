import React, { useState } from "react";

const SumFunc = () => {
  const [number, setNumber] = useState(0);
  const [output, setOutput] = useState(0);
  const [array, setArray] = useState([]);
  function Addition(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    setOutput(sum);
  }
  const handleAdd = () => {
    const newArray = [...array, parseInt(number, 10)];
    setArray(newArray);
    setNumber('')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Addition(array);
    setArray("");
    setNumber("")
  };
  return (
    <>
      <section className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit}>
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">
              Sum of array {array + ","} number
            </h2>
            <input
              type="number"
              value={number}
              placeholder="array number"
              onChange={(e) => setNumber(e.target.value)}
              className="p-1 me-2"
            />

            <span
              onClick={handleAdd}
              className="text-white border border-white rounded mt-5 px-6 py-1 cursor-pointer"
            >
              Add
            </span>
            <button
              type="submit"
              className="text-white border border-white rounded mt-5 px-6 py-1 mx-2"
            >
              output
            </button>
            <p className="text-white text-lg text-center mt-6">
              output :- {output}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SumFunc;
