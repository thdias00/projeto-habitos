import { AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoName from "../../components/LogoName";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "../../providers/auth";
import IconUser from "../../assets/undraw_male_avatar_323b.svg";
import ModalBase from '../ModalBase';
import Input from "../Input";
import ComponentButton from "../Button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const ResponsiveAppBar = ({ color }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const history = useHistory();
    const { logout, updateUser, user } = useAuth();
    const [valor, setValor] = useState("");
    const [val, setVal] = useState("");

    const formSchema = yup.object().shape({
        username: yup.string().required('Nome obrigatório').matches(/^[a-zA-Z\s]+$/, "Nome somente com letras"),
        email: yup.string().required("Campo Obrigatório").email(),
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    })

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    function upUser(data) {
        updateUser(data);
    }
    function reset() {
        setValor("");
        setVal("");
    }
    console.log(color)
    return (
        <AppBar position="static" sx={{ background: `${color}` }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <LogoName />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={() => history.push("/dashboard")}>
                                <Typography textAlign="center" >DASHBOARD</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => history.push("/habitsandgroups")}>
                                <Typography textAlign="center" >HÁBITOS E GRUPOS</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <LogoName />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => history.push("/dashboard")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            DASHBOARD
                        </Button>
                        <Button
                            onClick={() => history.push("/habitsandgroups")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            HÁBITOS E GRUPOS
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: "60px", height: "60px" }}>
                                <Avatar alt="User" src={IconUser} sx={{ width: "100%", height: "100%" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <ModalBase
                                    labelToCallModal='PERFIL'
                                    titleModal='Meu Perfil'>
                                    <Box sx={{ display: "flex", flexDirection: "row", alignItens: "center", margin: "10px 0px 20px 0px" }}>
                                        <Avatar alt="User" src={IconUser} sx={{ width: "100px", height: "100px" }} />
                                        <Box sx={{ marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "start" }}>
                                            <Typography sx={{ fontWeight: "bold" }}>{user.username}</Typography>
                                            <Typography >{user.email}</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <h3>Editar Perfil</h3>
                                        <Box>
                                            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(upUser)}>
                                                <Input
                                                    placeholder="Novo Username"
                                                    type="text"
                                                    variant="standard"
                                                    onChange={(e) => setValor(e.target.value)}
                                                    value={valor}
                                                    register={register}
                                                    error={!!errors.username}
                                                    helperText={errors.username?.message}
                                                    name="username"
                                                />
                                                <Input
                                                    placeholder="Novo Email"
                                                    type="text"
                                                    variant="standard"
                                                    onChange={(e) => setVal(e.target.value)}
                                                    value={val}
                                                    register={register}
                                                    error={!!errors.email}
                                                    helperText={errors.email?.message}
                                                    name="email"
                                                />
                                                <ComponentButton type="submit" variant="contained" onClick={reset}>Atualizar</ComponentButton>
                                            </form>
                                        </Box>
                                    </Box>
                                </ModalBase>
                            </MenuItem>
                            <MenuItem onClick={logout}>
                                <Typography textAlign="center">LOGOUT</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;