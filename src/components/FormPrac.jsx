import React, { useState } from "react";

const FormPrac = () => {
  const [newArray, setNewArray] = useState([]);
  const [formData, setFormData] = useState({
    FirstName: "",
    lastName: "",
    contact: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    console.log(formData, "formData");
    setNewArray((prevData) => [...prevData, { ...formData }]);
    e.preventDefault();
    setFormData({
      FirstName: "",
      lastName: "",
      contact: "",
      gender: "",
    });
    console.log(newArray.length);
  };
  return (
    <>
      <section className=" h-screen flex justify-center flex-col items-center bg-[#10111A]">
        <h2 className="text-white text-3xl mb-4 text-center font-semibold">
          Form
        </h2>
        <form>
          <div className="flex flex-col justify-center rounded-md border bg-white/4 backdrop-blur-md  gap-5 px-20 py-10">
            <div className="flex gap-5">
              <label htmlFor="FirstName">
                <input
                  className="py-1 px-2 bg-transparent text-white border-b outline-none"
                  type="text"
                  placeholder="FirstName"
                  value={formData.FirstName}
                  onChange={(e) => {
                    setFormData({ ...formData, FirstName: e.target.value });
                  }}
                />
              </label>
              <label htmlFor="LastName">
                <input
                  className="py-1 px-2 bg-transparent text-white border-b outline-none"
                  type="text"
                  placeholder="LastName"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className="flex gap-5">
              <label htmlFor="Contact">
                <input
                  className="py-1 px-2 bg-transparent text-white border-b outline-none appearance-none"
                  type="number"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={(e) => {
                    setFormData({ ...formData, contact: e.target.value });
                  }}
                />
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full bg-transparent text-white outline-none border-b"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
              >
                <option selected>Gender</option>
                <option value="male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="border py-1 px-4 text-lg text-white rounded-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        {newArray.length > 0 ? (
          <>
            <table className=" border-[2px] mt-3">
              <thead>
                <tr className="border-[2px]">
                  <th className="px-5 text-white p-3 border-[2px]">
                    FirstName
                  </th>
                  <th className="px-5 text-white border-[2px]">lastName</th>
                  <th className="px-5 text-white border-[2px]">contact</th>
                  <th className="px-5 text-white border-[2px]">gender</th>
                </tr>
              </thead>
              {newArray.map((obj, i) => {
                return (
                  <>
                    <tbody>
                      <tr className="border-[2px]" key={i}>
                        <td className="px-5 text-white p-3 border-[2px]">
                          {obj.FirstName}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.lastName}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.contact}
                        </td>
                        <td className="px-5 text-white border-[2px]">
                          {obj.gender}
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default FormPrac;
