import React from "react";
import { useState } from "react";

const Pattern = () => {
    const [size, setSize] = useState(5);
    const [output, setOutput] = useState('')
 function printCross(size) {
   let result = [];
   for (let i = 0; i < size; i++) {
     let row = [];
     for (let j = 0; j < size; j++) {
       if (i === j || j === size - 1 - i) {
         row.push(
           <span key={j} className="text-white">
             😁
           </span>
         );
       } else {
         row.push(
             <span key={j} className="text-transparent w-[21px] inline-block">
                 {" "}
           </span>
         );
       }
     }
     result.push(
       <div key={i} className="whitespace-pre">
         {row}
       </div>
     );
   }
   setOutput(result);
 }

  const handleSubmit = (e) => {
      e.preventDefault();
       printCross(size);
  };
  return (
    <>
      <section className="min-h-screen bg-[#10111A] py-12">
        <div className="container mx-auto h-full flex justify-center flex-col items-center py-12">
          <h2 className="text-white text-3xl mb-4 text-center font-semibold">
          Print Pattern 
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center rounded-md border max-w-[600px] bg-white/5 backdrop-blur-md gap-5 px-20 py-10">
              <div className="flex gap-2">
                <input
                  type="number"
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  placeholder="starting size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="border py-1 px-4 text-lg text-white rounded-xl my-5"
              >
                Output
              </button>
              <div className="mt-2 text-white h-full">{output}</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Pattern;
