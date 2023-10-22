import React, { useState } from "react";

const ArrangeArrayInAscendingOrder = () => {
  const [array, setArray] = useState(["Palvi", "Keshav", "Neha", "Muskan","Anjali","Deepanshu","Rakesh","Ravi","Vikram","Ishu"]);

  function sortArray() {
    const sortedArray = [...array]; 
    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j].length > sortedArray[j + 1].length) {
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    setArray(sortedArray);
  }

  return (
    <>
      <section className="h-screen bg-[#10111A]">
        <div className="container mx-auto text-white h-full flex justify-center flex-col items-center">
          <h2 className="text-white text-3xl mb-4 text-center font-semibold">
            Array in Ascending Order
          </h2>
          <button
            onClick={sortArray}
            className="text-white border border-white rounded mt-5 px-6 py-1"
          >
            Sort Array
          </button>
          <ul className="mt-5">
            {array.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ArrangeArrayInAscendingOrder;
