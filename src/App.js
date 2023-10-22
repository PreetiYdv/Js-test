import { Routes, Route } from "react-router";
import "./App.css";
import Table from './components/Table';
import Content from "./components/common/Content";
import FormPrac from "./components/FormPrac";
import FindVowel from "./components/FindVowel";
import FindOddAndEvenNumber from './components/FindOddAndEvenNumber';
import Counting from "./components/Counting";
import ArrangeArrayInAscendingOrder from "./components/ArrangeArrayInAscendingOrder";
import RangeExponentData from "./components/RangeExponentData";
import SumFunc from "./components/SumFunc";
import GreaterMultiple from "./components/GreaterMultiple";
import Pattern from "./components/Pattern";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/form" element={<FormPrac />}></Route>
        <Route path="/find-vowel" element={<FindVowel />}></Route>
        <Route
          path="/find-odd-and-even-number"
          element={<FindOddAndEvenNumber />}
        ></Route>
        <Route path="/counting" element={<Counting />}></Route>
        <Route path="/sort-array" element={<ArrangeArrayInAscendingOrder />}></Route>
        <Route path="/exponent" element={<RangeExponentData />}></Route>
        <Route path="/addition" element={<SumFunc />}></Route>
        <Route path="/greater-multiple" element={<GreaterMultiple />}></Route>
        <Route path="/pattern" element={<Pattern />}></Route>
      </Routes>
    </>
  );
}

export default App;
