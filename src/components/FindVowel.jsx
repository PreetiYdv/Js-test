import React, { useState } from "react";

const FindVowel = () => {
  const [word, setWord] = useState("");
  const [output, setOutput] = useState([]);
    const handleSubmit = (e) => {
       let vowels = ["a", "e", "i", "o", "u"];
     e.preventDefault();
     let result = [];
     for (let j = 0; j < word.length; j++) {
       const letter = word[j];
       let isVowel = false;
       for (let i = 0; i < vowels.length; i++) {
         if (letter === vowels[i]) {
           isVowel = true;
           console.log(letter);
         }
       }
       if (isVowel) {
           result.push(
             <span key={j} className="text-green-400">
               {letter}  is a vowel
               <br />
             </span>
           );
       }
       else {
           result.push(
             <span key={j} className="text-red-500">
               {letter}  is a consonant
               <br />
             </span>
           );
       }
     }
        setOutput(result);
        setWord('')
   };
  return (
    <>
      <section className=" h-screen bg-[#10111A]">
        <div className="container mx-auto h-full flex justify-center flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center"
          >
            <h2 className="text-white text-3xl mb-4 text-center font-semibold">
              Find Vowel
            </h2>
            <input
              type="text"
              value={word}
              placeholder="Type letter or word"
              onChange={(e) => setWord(e.target.value)}
              className="p-1"
            />
            <button
              type="submit"
              className="text-white border border-white rounded mt-5 px-6 py-1"
            >
              output
            </button>
            <p className="text-white text-lg text-center mt-6">
              output :- <br />{output.map((item) => item)}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default FindVowel;
