import { TextField } from "@mui/material";

const Input = ({ register, name, error, ...rest }) => {
  return (
    <TextField
      {...register(name)}
      error={error}
      {...rest}
      sx={{ margin: ".1rem 0" }}
    />
  )
}
export default Input;