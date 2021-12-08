import { TextField } from "@mui/material";

const Input = ({ label, register, name, error, ...rest }) => {
    return (
        <TextField
            {...register(name)}
            error={error}
            {...rest}
        />
    )
}
export default Input;