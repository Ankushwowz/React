import React from "react";
import { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Gitusers from "./pages/Gitusers";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
        setLoading(false);
      console.log("my error is" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <>
     <Gitusers  users={users}/>
    </>
  );
};

export default UseEffectAPI;
