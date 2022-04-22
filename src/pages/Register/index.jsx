import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS, DivS } from "./style";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = (data) => console.log(data);

  const history = useHistory();
  return (
    <SectionS>
       <DivS>
       <img src={Logo} alt="" />      
       <ButtonS
            onClick={() => history.push("/")}
            buttonColor="#868E96"
          >
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
          <label htmlFor="email">E-mail</label>
          <select name="" id="">
            <option value="M1">Primeiro Módulo</option>
            <option value="M2">Segundo Módulo</option>
            <option value="M3">Terceiro Módulo</option>
            <option value="M4">Quarto Módulo</option>
            <option value="M5">Quinto Módulo</option>
            <option value="M6">Sexto Módulo</option>
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
