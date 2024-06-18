import React from 'react'


const User = () => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <tr>
        <td className="border border-slate-950 py-1 px-3">
          The Sliding Mr. Bones (Next Stop, Pottersville)
        </td>
        <td className="text-center border border-y-slate-950 border-x-0">
          <button className="border border-b-2 focus:ring-2 rounded py-1 px-2 bg-indigo-500 hover:bg-indigo-600 text-white">
            Update
          </button>
        </td>
        <td className="text-center border border-y-slate-950 border-x-0">
          <button className="border focus:ring-2 rounded py-1 px-2 bg-red-500 hover:bg-red-600 text-white">
            Delete
          </button>
        </td>
      </tr>
    );
  }
  return (
    <>
      <div className="container mx-auto w-8/12 mt-24 mb-10">
        <div className="mb-5 space-x-5">
          <span>Add User: </span>
          <button className="border focus:ring-2 rounded py-1 px-5 bg-indigo-500 hover:bg-indigo-600 text-white">
            Add
          </button>
        </div>
        <div className="mb-5 space-x-5">
          <span>Search User: </span>
          <input
            type="text"
            className="border border-slate-950 px-2 rounded"
            name="teacher"
            id="add_teacher"
          />
        </div>
      </div>
      <div className="w-full">
        <table className="container mx-auto table-auto border-collapse border border-slate-950 lg:w-9/12 md:w-7/12 sm:w-5/12">
          <thead>
            <tr>
              <th className="border border-slate-950 w-6/12 py-1 px-3">
                User
              </th>
              <th className="border border-y-slate-950 border-x-0 w-1/12"></th>
              <th className="border border-y-slate-950 border-x-0 w-1/12"></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}

export default User