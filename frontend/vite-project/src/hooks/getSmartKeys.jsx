import { useEffect, useState } from "react";
import axios from "axios";

export const getSmartKeys = () => {
  const [allsmartKeys, setallSmartKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSmartKeys = async () => {
    try {
      const fetchedsmartkeys = await axios.get("http://localhost:4000/smartkeys");
      setallSmartKeys(fetchedsmartkeys.data);
      setLoading(false)
    } catch (error) {
      setError(error.message)
      alert(`Error in fetching smartkeys ${error}`);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchSmartKeys();
  },[]);

  return {allsmartKeys,loading,error}
};
