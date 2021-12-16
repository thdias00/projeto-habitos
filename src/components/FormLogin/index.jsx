import { FormLoginContainer, LinkContainer } from "./styles";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";
import { Box, Stack } from '@mui/material';
import ComponentButton from "../Button";
import { useAuth } from "../../providers/auth";
import LogoName from '../LogoName';
import Input from '../Input';

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
      <LogoName welcome />
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
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: "center",
              margin: '.8rem 0',
              width: '100%',
            }}>
            <Input
              color="success"
              sx={{
                margin: '1rem 0',
                width: '100%',
              }}
              variant="standard"
              type="text"
              label="Usuário"
              error={!!errors.username}
              helperText={errors.username?.message}
              name="username"
              register={register}
              margin="normal"
            />
          </Stack>
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: "center",
              margin: '.8rem 0',
              width: '100%',
            }}>
            <Input
              color="success"
              sx={{
                margin: '1rem 0',
                width: '100%',
              }}
              variant="standard"
              type="password"
              label="Senha"
              error={!!errors.password}
              helperText={errors.password?.message}
              name="password"
              register={register}
              margin="normal"
            />
          </Stack>
          <div className='links'>Não tens conta? <LinkContainer to='/signup' className='highlight'>Crie aqui</LinkContainer></div>
          <ComponentButton color="success" variant='contained' sx={{ width: '50px' }} type='submit'>Login</ComponentButton>
        </Box>
      </form>

    </FormLoginContainer>
  </>)
}

export default FormLogin