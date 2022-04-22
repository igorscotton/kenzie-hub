import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS, DivS } from "./style";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .min(10, "Nome precisa ter no mínimo 10 caracteres")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome pode ter somente letras"
      ),
    email: yup.string().required("Campo obrigatório!").email(),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Sua senha precisa ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Senha precisa ter pelo menos 8 caracteres e requer pelo menos uma letra minuscula, uma letra maiscula, um numero e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = (data) => {
    console.log(data);
    delete data.confirmPassword;
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        return res.data ? history.push('/')  : null
      })
      .catch((error) => console.log(error));

      
  };

  
  return (
    <SectionS>
      <DivS>
        <img src={Logo} alt="" />
        <ButtonS onClick={() => history.push("/")}>
          Voltar
        </ButtonS>
      </DivS>
      <FormS onSubmit={handleSubmit(onRegister)}>
        <h3>Crie sua conta</h3>
        <p>Rápido e grátis, vamos nessa</p>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            type="text"
            placeholder="Escreva um pouco sobre você"
            {...register("bio")}
          />
        </div>
        <div>
          <label htmlFor="contact">Rede Social</label>
          <input
            name="contact"
            type="text"
            placeholder="Digite sua rede social"
            {...register("contact")}
          />
        </div>
        <div>
          <label htmlFor="modulo">Selecionar Módulo</label>
          <select name="modulo" id="" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
          </select>
        </div>
        <div>
          <ButtonS type="submit">Cadastrar</ButtonS>
        </div>
      </FormS>
    </SectionS>
  );
};

export default Register;
