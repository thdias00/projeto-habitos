import { Button } from "@mui/material";

const ComponentButton = ({ children, variant, color, ...rest }) => {
    return (
        <Button variant={variant} color={color} {...rest}>{ }children</Button>
    )
}
export default ComponentButton;