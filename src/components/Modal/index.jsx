import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Modal, Box } from "@mui/material";
import { TitleModal, FormS } from "./style";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 296,
  height: 274.34, 
  boxShadow: 24,
  borderRadius: 4
};

const ModalTec = ({ open, handleClose, setTecnology }) => {
  const schema = yup.object().shape({
    title: yup.string().required().min(3, 'é necessário ter mais de 3 caracteres'),
    status: yup.string().required()
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onTecnology = (data) => {
    delete data.name
    axios.post('https://kenziehub.herokuapp.com/users/techs', data, {headers: {
      'Authorization': `Bearer ${window.localStorage.getItem('@tokenKenzieHub')}`
    }}).then((res) =>{
      handleClose();
      setTecnology(res.data);
    }).catch((error) => console.log(error))
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <TitleModal>
          <p>Cadastrar Tecnologia</p>
          <button onClick={handleClose}>X</button>
        </TitleModal>
        <FormS action="" onSubmit={handleSubmit(onTecnology)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              name="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("title")}
            />
          </div>
          <div>
            <label htmlFor="status">Selecionar status</label>
            <select name="status" id="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit">Cadastrar Tecnologia</button>
        </FormS>
      </Box>
    </Modal>
  );
};

export default ModalTec;
