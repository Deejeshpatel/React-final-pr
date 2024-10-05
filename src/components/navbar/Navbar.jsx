import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('users');
    navigate("/login")
  }

  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-gray-800 font-semibold text-lg px-5 ">
      <li>
        <Link to={'/'} className="hover:text-pink-500 transition duration-300">Home</Link>
      </li>
      <li>
        <Link to={'/allproduct'} className="hover:text-pink-500 transition duration-300">All Product</Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to={'/signup'} className="hover:text-pink-500 transition duration-300">Signup</Link>
          </li>
          <li>
            <Link to={'/login'} className="hover:text-pink-500 transition duration-300">Login</Link>
          </li>
        </>
      )}
      {user?.role === "user" && (
        <li>
          <Link to={'/user-dashboard'} className="hover:text-pink-500 transition duration-300">User</Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li>
          <Link to={'/admin-dashboard'} className="hover:text-pink-500 transition duration-300">Admin</Link>
        </li>
      )}
      {user && (
        <li className="cursor-pointer hover:text-pink-500 transition duration-300" onClick={logout}>
          Logout
        </li>
      )}
      <li>
        <Link to={'/cart'} className="hover:text-pink-500 transition duration-300">
          Cart ({cartItems.length})
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
    <div className="lg:flex lg:justify-between items-center py-4 lg:px-10 px-5">
      {/* Logo Section */}
      <div className="left py-3 lg:py-0 flex justify-center lg:justify-start">
        <Link to={'/'}>
          <h2 className="font-extrabold text-gray-800 text-3xl lg:text-4xl tracking-tight">
            India-Mart
          </h2>
        </Link>
      </div>
  
      {/* Navigation Links */}
      <div className="right flex justify-center lg:justify-end mb-4 lg:mb-0 space-x-6">
        {navList}
      </div>
  
      {/* Search Bar */}
      <div className="search-bar mt-2 lg:mt-0 flex justify-center lg:justify-end">
        <SearchBar />
      </div>
    </div>
  </nav>
  

  );
}

export default Navbar;

