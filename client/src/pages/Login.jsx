import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { login } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formInputStyles, defaultBtmStyles, disabledBtmStyles } from "../styles/form.styles";
import ButtonSpinner from "../components/ButtonSpinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLoginForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const userData = {
      username: formData.username,
      password: formData.password,
    };
    axios
      .post("auth/login", userData)
      .then((response) => {
        dispatch(login({ token: response.data.data }));
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return formData.username && formData.password;
  };
  return (
    <form onSubmit={handleLoginForm}>
      <div className="flex items-center justify-center mt-24 ">
        <div className="bg-gray-100 p-8 rounded shadow-md w-96">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input value={formData.username} onChange={handleInputChange} type="text" className={formInputStyles} name="username" autoComplete="nope" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input value={formData.password} onChange={handleInputChange} className={formInputStyles} name="password" autoComplete="nope" type="password" />
          </div>
          <button className={`${isFormValid() && !isLoading ? defaultBtmStyles : disabledBtmStyles}`} type="submit" disabled={!isFormValid() && !isLoading}>
            {isLoading ? <ButtonSpinner /> : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
