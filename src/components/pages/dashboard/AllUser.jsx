import React, { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import Pdf from "react-to-pdf";
import allData from "./data.json";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";

const AllUser = () => {
  const ref = React.createRef();
  const componentRef = useRef();
  const tableRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
  return (
    <div className="w-11/12 mt-5">
      <div className="flex justify-center">
        <Pdf
          targetRef={ref}
          filename="Appointment-data.pdf"
          x={1.5}
          y={1.5}
          scale={0.7}
        >
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn px-10 ">
              <FaFilePdf /> PDF
            </button>
          )}
        </Pdf>
        <button onClick={onDownload} className="btn px-10 mx-3">
          <FaFileExcel /> EXCEL
        </button>
        <button onClick={handlePrint} className="btn px-10 ">
          <AiFillPrinter /> PRINT
        </button>
      </div>
      <div ref={ref}>
        <div>
          <div className="p-10" ref={componentRef}>
            <h1 className="text-2xl font-semibold text-purple-500 mb-4">
              All Users
            </h1>
            <div className="scro w-full">
              <table className="table w-full" ref={tableRef}>
                <thead className="over sticky top-0 z-10">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {allData?.map((data) => (
                    <tr key={data._id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={data.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{data.name}</div>
                            <div className="text-sm opacity-50 lowercase">
                              {data.userName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{data.email}</td>
                      <td>{data.plan}</td>
                      <th>
                        <button
                          className={` ${
                            data.status === "Pending"
                              ? "bg-orange-200 text-orange-600"
                              : "bg-green-300 text-green-900"
                          } font-normal text-xs px-3 py-1 rounded-full`}
                        >
                          {data.status}
                        </button>
                      </th>
                      <th>
                        <div className="dropdown dropdown-end">
                          <label tabIndex={2} className="btn btn-ghost">
                            <div className="">
                              <BsThreeDotsVertical />
                            </div>
                          </label>
                          <ul
                            tabIndex={2}
                            className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box"
                          >
                            <li>
                              <button>Edit</button>
                            </li>
                            <li>
                              <button>Delete</button>
                            </li>
                          </ul>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
