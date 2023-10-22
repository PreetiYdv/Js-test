import React, { useState } from "react";

const Counting = () => {
  const [start, setStart] = useState(0);
  const [count, setCount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let countingResult = "";
    if (start <= 0) {
      setStart(0);
    }
    for (let i = start; i <= 100; i++) {
      countingResult += i + ", ";
      // console.log(i);
    }
    setCount(countingResult);
  }
  return (
    <section className="h-screen bg-[#10111A]">
      <div className="container mx-auto h-full flex justify-center flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col items-center"
        >
          <h2 className="text-white text-3xl mb-4 text-center font-semibold">
            Counting from given number to 100
          </h2>
          <input
            type="number"
            value={start}
            placeholder="Type numbers"
            onChange={(e) => setStart(parseInt(e.target.value))}
            className="p-1"
          />
          <button
            type="submit"
            className="text-white border border-white rounded mt-5 px-6 py-1"
          >
            Output
          </button>
          <p className="text-white text-lg text-center mt-6">
            Counting: {count}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Counting;
