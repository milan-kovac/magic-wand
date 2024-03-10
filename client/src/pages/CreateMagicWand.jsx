import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { formInputStyles, defaultBtmStyles, disabledBtmStyles } from "../styles/form.styles";
import ButtonSpinner from "../components/ButtonSpinner";

const CreateMagicWand = () => {
  const woodValues = ["alder", "acacia", "apple", "ash", "blackthorn", "cherry"];
  const [formData, setFormData] = useState({
    flexibility: "",
    length: 1,
    wood: "ash",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCraeteForm = async (event) => {
    console.log("Creara se");
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("magic-wand", formData)
      .then(() => {
        toast.success("Successfully created magic wand.");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleCraeteForm}>
        <div className="flex items-center justify-center mt-24 ">
          <div className="bg-gray-100 p-8 rounded shadow-md w-96">
            <div className="mb-4">
              <label htmlFor="flexibility" className="block text-sm font-medium text-gray-600">
                Flexibility
              </label>
              <input value={formData.flexibility} onChange={handleInputChange} type="text" className={formInputStyles} name="flexibility" />
            </div>
            <div className="mb-4">
              <label htmlFor="length" className="block text-sm font-medium text-gray-600">
                Length
              </label>
              <input value={formData.length} onChange={handleInputChange} className={formInputStyles} name="length" type="number" min={1} />
            </div>
            <div className="mb-4">
              <label htmlFor="wood" className="block text-sm font-medium text-gray-600">
                Wood
              </label>
              <select value={formData.wood} onChange={handleInputChange} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500" name="wood">
                {woodValues.map((woodType) => (
                  <option key={woodType} value={woodType}>
                    {woodType}
                  </option>
                ))}
              </select>
            </div>
            <button className={`${!isLoading ? defaultBtmStyles : disabledBtmStyles}`} type="submit" disabled={isLoading}>
              {isLoading ? <ButtonSpinner /> : "Create"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateMagicWand;
