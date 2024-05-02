import {memo} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { BiBell, BiMoon  } from "react-icons/bi";


interface IProp {
    open: boolean;
    handleDrawerOpen: () => void;
}

const Wrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const WrapperUserBlock = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center'
}));

const WrapperIcon = styled(Box)(() => ({
    marginRight: 20,
    marginLeft: 20,
    cursor: 'pointer'
}))

export const Header = memo(({ open, handleDrawerOpen }: IProp) => {
    return (
        <Wrapper>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Header
                </Typography>
            </Toolbar>
            <WrapperUserBlock>
                <WrapperIcon>
                    <BiBell />
                </WrapperIcon>
                <WrapperIcon>
                    <BiMoon />
                </WrapperIcon>
                <Avatar alt="Igor Miroshkin" src="../../assets/avatar.jpg" />
            </WrapperUserBlock>
        </Wrapper>
    )
});

Header.displayName = 'Header'