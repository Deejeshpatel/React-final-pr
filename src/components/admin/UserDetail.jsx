import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
  const context = useContext(myContext);
  const { getAllUser } = context;

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="py-5 flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-2xl text-gray-800 font-bold">All Users</h1>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="h-12 px-6 text-md font-bold border border-gray-200">S.No.</th>
              <th className="h-12 px-6 text-md font-bold border border-gray-200">Name</th>
              <th className="h-12 px-6 text-md font-bold border border-gray-200">Email</th>
              <th className="h-12 px-6 text-md font-bold border border-gray-200">Uid</th>
              <th className="h-12 px-6 text-md font-bold border border-gray-200">Role</th>
              <th className="h-12 px-6 text-md font-bold border border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody>
            {getAllUser.map((value, index) => {
              return (
                <tr key={index} className="hover:bg-gray-50 text-gray-600 transition duration-300">
                  <td className="h-12 px-6 border border-gray-200">{index + 1}</td>
                  <td className="h-12 px-6 border border-gray-200 first-letter:uppercase">{value.name}</td>
                  <td className="h-12 px-6 border border-gray-200">{value.email}</td>
                  <td className="h-12 px-6 border border-gray-200">{value.uid}</td>
                  <td className="h-12 px-6 border border-gray-200 first-letter:uppercase">{value.role}</td>
                  <td className="h-12 px-6 border border-gray-200">{value.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
