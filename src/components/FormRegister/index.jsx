// import { SignupContainer } from "./styles";
import * as yup from 'yup';
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import api from "../../services/api";
import ComponentButton from '../Button';
import TextField from '@mui/material/TextField';
import toast from 'react-hot-toast';
import { FormRegisterContainer, LinkContainer } from './styles';
import LogoName from '../LogoName';

const FormRegister = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Nome obrigatório').matches(/^[a-zA-Z\s]+$/, "Nome somente com letras"),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(8, 'Deve ter ao menos 8 caracteres')
      .matches(/^(?=.*[a-z])/, "Deve ter ao menos uma letra minúscula")
      .matches(/^(?=.*[A-Z])/, "Deve ter ao menos uma letra maiúscula")
      .matches(/^(.*[0-9].*)/, "Deve ter ao menos um número")
      .matches(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/, "Deve ter ao menos um caracter especial"),
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

  const onSubmitFunction = (data) => {
    delete data.password_conf;
    api.post('/users/', data)
      .then(response => {
        toast.success('Success');
        reset();
      })
      .catch(err => {
        toast.error('Error');
      })
  }

  return (<>
    <FormRegisterContainer>
      <LogoName welcome />
      <div className='subtitle'>Preenche todo o formulário</div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          variant="standard"
          type="text"
          label="UserName"
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username")}
          size="small"
        />
        <TextField
          variant="standard"
          type="email"
          label="E-mail"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          size="small"
        />
        <TextField
          variant="standard"
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
          size="small"
        />
        <TextField
          variant="standard"
          type="password"
          label="Confirm Password"
          error={!!errors.password_conf}
          helperText={errors.password_conf?.message}
          {...register("password_conf")}
          size="small"
        />
        <div className='links'>Já se cadastrou? <LinkContainer to='/login' className='highlight'>Faça o login</LinkContainer></div>
        <ComponentButton 
          variant='contained'
        type='submit'>
        Signup</ComponentButton>
      </form>
    </FormRegisterContainer>
  </>)
}

export default FormRegister