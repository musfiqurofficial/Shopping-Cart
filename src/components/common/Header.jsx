import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  let activeStyle = {
    borderBottom: "2px solid #ff8400",
    backgroundColor: "#ffffff00",
    borderRadius: "0",
    padding: "5px 10px",
  };
  const menuItems = (
    <>
      {user?.uid && (
        <li>
          <NavLink
            to="/Dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            DashBoard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 sticky top-0 shadow bg-opacity-50 z-20">
      <div className="lg:w-10/12 mx-auto w-11/12 navbar ">
        <div className="navbar-start py-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow-md bg-base-100 w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img className="w-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <div>
              <div className="navbar">
                <button className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <div className="flex-none">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                          <Link
                            to="/shop"
                            className="btn btn-primary btn-block"
                          >
                            View cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link>Settings</Link>
                      </li>
                      <li>
                        <Link to="/singIn" onClick={handleLogOut}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/singIn"
              className="btn rounded-md px-6 text-base hover:bg-base-100 border-none text-white hover:text-black bg-orange-600"
            >
              Sing In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
