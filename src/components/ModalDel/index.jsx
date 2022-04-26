import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Modal, Box } from "@mui/material";
import { TitleModal, FormS, DivButton } from "./style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 296,
  height: 274.34,
  boxShadow: 24,
  borderRadius: 4,
};

const ModalDel = ({ openM, handleCloseM, setPathTecnology, idTech, setDeleteTecnology, deleteTecnology, name }) => {
  const schema = yup.object().shape({
    status: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onTecnologyPath = (data) => {
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${idTech}`, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "@tokenKenzieHub"
          )}`,
        },
      })
      .then((res) => {
        handleCloseM();
        setPathTecnology(res);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${idTech}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            "@tokenKenzieHub"
          )}`,
        },
      })
      .then(() => {
        handleCloseM();
        setDeleteTecnology(deleteTecnology ? false : true)
      });
  };

  return (
    <Modal open={openM} onClose={handleCloseM}>
      <Box sx={style}>
        <TitleModal>
          <p>Tecnologia Detalhes</p>
          <button onClick={handleCloseM}>X</button>
        </TitleModal>
        <FormS action="" onSubmit={handleSubmit(onTecnologyPath)}>
          <div className="form--input">
            <label htmlFor="name">Nome da Tecnologia</label>
            <input
              disabled
              name="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
            />
          </div>
          <div className="form--input">
            <label htmlFor="status">Status</label>
            <select name="status" id="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <DivButton>
            <button className="button--path" type="submit">
              Salvar Alterações
            </button>
            <button type="button" className="button--delete" onClick={handleDelete}>
              Excluir
            </button>
          </DivButton>
        </FormS>
      </Box>
    </Modal>
  );
};

export default ModalDel;
