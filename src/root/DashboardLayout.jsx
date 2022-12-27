import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <div className="grid grid-cols-5 gap-5">
          <div className="border-r-2 border-gray-200 h-full">
            <ul className="menu p-4 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">All User</Link>
              </li>
              <li>
                <Link to="/dashboard">Add User</Link>
              </li>
              <li>
                <Link to="/dashboard">Add Product</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
