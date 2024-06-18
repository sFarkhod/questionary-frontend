import React from "react";
import { useSelector } from "react-redux";
import useDocumentTitle from "../useDocumentTitle";

function Questionary() {
  useDocumentTitle("Questionary");

  const access = useSelector((state: any) => state.user.access);
  const refresh = useSelector((state: any) => state.user.refresh);
  const isAdmin = useSelector((state: any) => state.user.is_Admin);

  console.log(`Access: ${access} \n Refresh ${refresh} \n Is Admin ${isAdmin}`);

  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <tr>
        <td className="border border-slate-950 py-1 px-3">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
        <td className="border border-slate-950 text-center">
          <input
            id="list-radio-license"
            type="radio"
            value=""
            name={"list-radio" + i}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
        </td>
      </tr>
    );
  }

  return (
    <>
      <div className="container mx-auto w-8/12 mt-24 mb-10">
        <div className="mb-5 space-x-5">
          <span>Subject: </span>
          <select name="subject" id="subjects" className="select-text bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
            <option value="subjects">Subjects</option>
          </select>
        </div>
        <div className="space-x-4">
          <span>Teacher: </span>
          <select name="teachers" id="teachers" className="select-text bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
            <option value="teachers">Teachers</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <table className="container mx-auto table-auto border-collapse border border-slate-950 lg:w-9/12 md:w-7/12 sm:w-5/12">
          <thead>
            <tr>
              <th className="border border-slate-950 w-6/12 py-1 px-3">Questions</th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">
                Strongly Disagree
              </th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">Disagree</th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">
                Partially Disagree
              </th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">
                Partially Agree
              </th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">Disagree</th>
              <th className="border border-slate-950 w-1/12 py-1 px-3">Strongly Agree</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}

export default Questionary;
