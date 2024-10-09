import { useState, useEffect } from "react";
import axios from "axios";

export const getKeyCovers = () => {
  const [allKeyCovers, setallKeyCovers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchKeyCovers = async () => {
    try {
      setLoading(true);
      const fetchedKeyCovers = await axios.get(
        "http://localhost:4000/keycovers"
      );
      setallKeyCovers(fetchedKeyCovers.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      alert(`Error in fetching keycovers ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeyCovers();
  }, []);

  return {allKeyCovers,loading,error}
};
