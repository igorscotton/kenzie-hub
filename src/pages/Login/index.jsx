import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS } from "./style";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Login = () => {
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

  const onLogin = (data) => console.log(data);

  const history = useHistory();

  return (
    <SectionS>
      <img src={Logo} alt="" />
      <FormS onSubmit={handleSubmit(onLogin)}>
        <h3>Login</h3>
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
          <ButtonS type="submit">Entrar</ButtonS>
        </div>
        <div>
          <p>Ainda não possui uma conta?</p>
          <ButtonS
            onClick={() => history.push("/register")}
            buttonColor="#868E96"
          >
            Cadastre-se
          </ButtonS>
        </div>
      </FormS>
    </SectionS>
  );
};

export default Login;
