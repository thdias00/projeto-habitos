import { TextField } from "@mui/material";

const Input = ({ label, register, name, error, ...rest }) => {
    return (
        <TextField
            {...register(name)}
            error={error}
            {...rest}
            sx={{ margin: "10px 0px" }}
        />
    )
}
export default Input;