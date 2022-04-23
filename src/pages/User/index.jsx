import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return <div>{JSON.stringify(user)}</div>;
};

export default User;
