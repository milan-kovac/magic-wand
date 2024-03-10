import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MagicWands = () => {
  const theadNames = ["Flexibility", "Owner", "Lenght", "Wood", "Inspect"];
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const [magicWands, setMagicWands] = useState([]);
  useEffect(() => {
    const fetchWands = async () => {
      axios
        .get("magic-wand/all")
        .then((response) => {
          setMagicWands(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response?.data.message);
          console.log(error);
        })
        .finally(() => {});
    };

    fetchWands();
  }, [isLoggedin]);
  return (
    <>
      <div className="w-9/12 mx-auto mt-24">
        {isLoggedin && (
          <Link to="/create-magic-wand">
            <button className="bg-[#00A3FF] w-44 h-8 rounded-[5px] px-4 py-1 gap-10 text-[#FFFFFF]">Create New Wand</button>
          </Link>
        )}
      </div>
      <table className="text-[#FFFFFF] text-left w-9/12 mx-auto mt-16">
        <thead>
          <tr className="text-2xl leading-9 p-2" style={{ fontFamily: "Montserrat", fontWeight: 600 }}>
            {theadNames.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {magicWands.map((wand, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#141E30]" : ""} style={{ fontFamily: "Montserrat", fontWeight: 400 }}>
              <th className="text-base leading-6 p-2">{wand?.flexibility}</th>
              <th className="text-base leading-6 p-2">{wand?.owner?.username}</th>
              <th className="text-base leading-6 p-2">{wand?.length}</th>
              <th className="text-base leading-6 p-2">{wand?.wood}</th>
              <th className="text-base leading-6 p-2">View Details</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MagicWands;
