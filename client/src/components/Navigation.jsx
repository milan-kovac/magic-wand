import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

const Navigation = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logout());
  };
  return (
    <nav className="text-white p-4 bg-[#182536] w-full">
      <ul className="flex justify-between text-center text-xl font-bold">
        <li>
          <Link to="/" className=" hover:text-gray-400 ">
            Home
          </Link>
          <Link to="/magic-wands" className=" hover:text-gray-400 ml-6">
            Magic Wands
          </Link>
        </li>
        <li>
          {isLoggedin ? (
            <Link to="/login" className="text-base flex items-center hover:text-gray-400" onClick={handleLogout}>
              <RiLogoutCircleLine className="mr-2" />
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="text-base flex items-center hover:text-gray-400">
              <RiLoginCircleLine className="mr-2" />
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
