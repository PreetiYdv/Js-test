import React, { useState } from "react";

const FindOddAndEvenNumber = () => {
  const [numbers, setNumbers] = useState("");
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberArray = numbers.split(",").map((num) => parseInt(num.trim()));
    const oddArray = [];
    const evenArray = [];

    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] % 2 !== 0) {
        oddArray.push(numberArray[i]);
      } else {
        evenArray.push(numberArray[i]);
      }
    }

    setOddNumbers(oddArray);
    setEvenNumbers(evenArray);
  };

  return (
    <>
      <section className="h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center"
          >
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">
              Find Odd and Even Numbers
            </h2>
            <input
              type="text"
              value={numbers}
              placeholder="Type numbers (e.g., 1, 2, 3)"
              onChange={(e) => setNumbers(e.target.value)}
              className="p-1"
            />
            <button
              type="submit"
              className="text-white border border-white rounded mt-5 px-6 py-1"
            >
              Output
            </button>
            <p className="text-white text-lg text-center mt-6">
              Odd Numbers: {oddNumbers.join(", ")}
              <br />
              Even Numbers: {evenNumbers.join(", ")}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default FindOddAndEvenNumber;
