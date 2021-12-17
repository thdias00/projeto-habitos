// import { SignupContainer } from "./styles";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ComponentButton from '../Button';
import { FormRegisterContainer, LinkContainer } from './styles';
import LogoName from '../LogoName';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import Input from '../Input';

const FormRegister = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Nome obrigatório').matches(/^[a-zA-Z\s]+$/, "Nome somente com letras"),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'Deve ter ao menos 6 caracteres'),
    password_conf: yup.string().required('Confirmação de senha obrigatória').test('passwords-match', 'Senhas diferentes!', function (value) { return this.parent.password === value })
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { signup } = useAuth();

  const history = useHistory();

  const onSubmitFunction = (data) => {
    delete data.password_conf;
    signup(data, history, reset);
  }

  return (<>
    <FormRegisterContainer>
      <LogoName welcome />
      <div className='subtitle'>Preenche todo o formulário</div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          color="success"
          variant="standard"
          type="text"
          label="Usuário"
          error={!!errors.username}
          helperText={errors.username?.message}
          name="username"
          register={register}
        />
        <Input
          color="success"
          variant="standard"
          type="email"
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          name="email"
          register={register}
        />
        <Input
          color="success"
          variant="standard"
          type="password"
          label="Senha"
          error={!!errors.password}
          helperText={errors.password?.message}
          name="password"
          register={register}
        />
        <Input
          color="success"
          variant="standard"
          type="password"
          label="Confirmar senha"
          error={!!errors.password_conf}
          helperText={errors.password_conf?.message}
          name="password_conf"
          register={register}
        />
        <div className='links'>Já se cadastrou? <LinkContainer to='/' className='highlight'>Faça o login</LinkContainer></div>
        <ComponentButton
          color="success"
          variant='contained'
          type='submit'>
          Signup</ComponentButton>
      </form>
    </FormRegisterContainer>
  </>)
}

export default FormRegister