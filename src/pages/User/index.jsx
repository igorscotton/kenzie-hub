import Logo from "../../Logo.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {ContainerS, LiS} from './style' 

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

  return (
    <ContainerS>
      <header>
        <img src={Logo} alt="" />
        <button>Sair</button>
      </header>
      <section>
        <h1>Olá, {user && user.name}</h1>
        <span>{user && user["course_module"]}</span>
      </section>
      <main>
        <div>
          <h2>Tecnologias</h2>
          <button>+</button>
        </div>
        <ul>
          {user && user.techs.map((tech) => {
            return (
              <LiS key={tech.title} id={tech.id}>
                <p>{tech.title}</p>
                <span>{tech.status}</span>
              </LiS>
            );
          })}
        </ul>
      </main>
    </ContainerS>
  );
};

export default User;
