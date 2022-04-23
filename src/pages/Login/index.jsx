import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS } from "./style";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from 'axios'


const Login = () => {
  const history = useHistory();

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

  const onLogin = async (data) => {
      await axios.post("https://kenziehub.herokuapp.com/sessions", data).then((res) => { 
      console.log(res);
      const token = res.data.token;
      const id = res.data.user.id;
      window.localStorage.setItem('@tokenKenzieHub', token)
      window.localStorage.setItem('@idKenzieHub', JSON.stringify(id))
      history.push(`/user/${id}`)  
    }).catch((error) => error)
   
  };

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
          <ButtonS type='submit'>Entrar</ButtonS>
        </div>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link className="link"
            to="/register"
          >
            Cadastre-se
          </Link>
        </div>
      </FormS>
    </SectionS>
  );
};

export default Login;
