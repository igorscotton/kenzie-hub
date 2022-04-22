import Logo from "../../Logo.svg";
import { SectionS, FormS, ButtonS } from "./style";
import { useHistory } from "react-router-dom";


const Login = () => {

  const history = useHistory();

  return (
    <SectionS>
      <img src={Logo} alt="" />
      <FormS>
        <h3>Login</h3>
        <div>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="text" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input name="password" type="text" placeholder="Digite sua senha" />
        </div>
        <div>
        <ButtonS type="submit">Entrar</ButtonS>
        </div>        
        <div>
          <p>Ainda não possui uma conta?</p>
          <ButtonS onClick={() => history.push('/register')} buttonColor='#868E96'>Cadastre-se</ButtonS>
        </div>
      </FormS>
    </SectionS>
  );
};

export default Login;
