import Logo from "../../Logo.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContainerS, LiS } from "./style";
import ModalTec from "../../components/Modal";
import ModalDel from "../../components/ModalDel";
import { toast } from "react-toastify";

import { Redirect } from "react-router-dom";

const User = ({auth, setAuth}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openM, setOpenM] = useState(false);
  const handleOpenM = (event) => {
    setOpenM(true);
    setName(event.target.firstChild.innerText);
    setidTech(event.target.id);
  };
  const handleCloseM = () => setOpenM(false);

  const { id } = useParams();
  
  const [user, setUser] = useState({});
  const [tecnology, setTecnology] = useState([]);
  const [idTech, setidTech] = useState("");
  const [pathTecnology, setPathTecnology] = useState([]);
  const [deleteTecnology, setDeleteTecnology] = useState(true);
  const [name, setName] = useState('')

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${id ? id : JSON.parse(localStorage.getItem('@idKenzieHub'))}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, tecnology, pathTecnology, deleteTecnology]);

  if(!auth){
    return <Redirect to="/"/>
  }

  return (
    <ContainerS>
      <ModalTec
        open={open}
        handleClose={handleClose}
        setTecnology={setTecnology}
        tecnology={tecnology}
      ></ModalTec>
      <ModalDel
        openM={openM}
        handleCloseM={handleCloseM}
        setPathTecnology={setPathTecnology}
        setDeleteTecnology={setDeleteTecnology}
        deleteTecnology={deleteTecnology}
        idTech={idTech}
        name={name}
      ></ModalDel>
      <header>
        <img src={Logo} alt="" />
        <button onClick={() => {
           localStorage.removeItem('@idKenzieHub')
           localStorage.removeItem('@tokenKenzieHub')
           setAuth(false)
        }}>Sair</button>
      </header>
      <section>
        <h1>Olá, {user && user.name}</h1>
        <span>{user && user["course_module"]}</span>
      </section>
      <main>
        <div>
          <h2>Tecnologias</h2>
          <button onClick={handleOpen}>+</button>
        </div>
        <ul>
          {user.techs &&
            user.techs.map((tech) => {
              return (
                <LiS key={tech.title} id={tech.id} onClick={handleOpenM}>
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
