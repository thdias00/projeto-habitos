import { FormLoginContainer, LinkContainer } from "./styles";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import ComponentButton from "../Button";
import { useAuth } from "../../providers/auth";
import Box from '@mui/material/Box';

const FormLogin = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Nome obrigatório').matches(/^[a-zA-Z\s]+$/, "Nome somente com letras"),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(8, 'Deve ter ao menos 8 caracteres')
      .matches(/^(?=.*[a-z])/, "Deve ter ao menos uma letra minúscula")
      .matches(/^(?=.*[A-Z])/, "Deve ter ao menos uma letra maiúscula")
      .matches(/^(.*[0-9].*)/, "Deve ter ao menos um número")
      .matches(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/, "Deve ter ao menos um caracter especial"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const { login } = useAuth();

  const history = useHistory();

  const onSubmitFunction = (data) => {
    login(data, history);
  }

  return (<>
    <FormLoginContainer>
      <div className='upper-title'>
        <span><span className='highlight'>Entrar</span> na sua conta</span>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Box
          sx={{
            width: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '1rem'
          }}>
          <TextField
            sx={{
              margin: '1rem 0',
              width: '100%',
            }}
            variant="standard"
            type="text"
            label="User Name"
            error={!!errors.username}
            helperText={errors.username?.message}
            {...register("username")}
          />
          <TextField
            sx={{
              margin: '1rem 0',
              width: '100%',
            }}
            variant="standard"
            type="password"
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <LinkContainer className='highlight' to='/register'>Esqueceu a senha?</LinkContainer>
          <div className='links'>Não tens conta? <LinkContainer to='/register' className='highlight'>Crie aqui</LinkContainer></div>
          <ComponentButton sx={{ width: '50px' }} type='submit'>Login</ComponentButton>
        </Box>
      </form>

    </FormLoginContainer>
  </>)
}

export default FormLogin