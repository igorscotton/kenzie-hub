import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS } from "./style";
import { Link, useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ auth, setAuth }) => {
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

  if (auth) {
    return (
      <Redirect
        to={`/user/${JSON.parse(localStorage.getItem("@idKenzieHub"))}`}
      />
    );
  }

  const onLogin = async (data) => {
    console.log(data);
    await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        const id = res.data.user.id;
        localStorage.setItem("@tokenKenzieHub", JSON.stringify(token));
        localStorage.setItem("@idKenzieHub", JSON.stringify(id));
        setAuth(true);

        toast.success("Login realizado com sucesso!", {
          style: {
            backgroundColor: "#343B41",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
          },
        });

        history.push(`/user/${id}`);
      })
      .catch((error) => {
        toast.error("E-mail ou senha incorreta, Tente novamente!", {
          style: {
            backgroundColor: "#343B41",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
          },
        });
        console.log(error);
      });
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
        <span>{errors.email?.message}</span>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </div>
        <span>{errors.password?.message}</span>
        <div>
          <ButtonS type="submit">Entrar</ButtonS>
        </div>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link className="link" to="/register">
            Cadastre-se
          </Link>
        </div>
      </FormS>
    </SectionS>
  );
};

export default Login;
