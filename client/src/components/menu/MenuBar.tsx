import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {listMenu} from "../../utils/listMenu";
import {ListItemNav} from "../ListItemNav/ListItemNav";
import {Header} from "../Header/Header";
import {AppRouter} from "../../appRouter/AppRouter";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: "transparent",
    color: '#000',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        ...(!open && {
            '& .MuiIconButton-root': {
                display: 'none'
            }
        }),
    }),
);

const WrapperMain = styled(Box)(() => ({
    width: '100%',
    marginTop: 65,
    height: '93vh',
    background: '#eee',
    padding: 24,
}))

export const MenuBar = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (
        index: number,
        path: string,
    ) => {
        setSelectedIndex(index);
        navigate(path);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar open={open}>
                <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {listMenu.map((itemMenu, index) => (
                        <Fragment key={itemMenu.key}>
                            <ListItemNav
                                icon={itemMenu.iconType}
                                valueNav={itemMenu.span}
                                index={index}
                                path={itemMenu.path}
                                selectedIndex={index}
                                handleListItemClick={() => handleListItemClick(index, itemMenu.path)}
                            />
                        </Fragment>
                    ))}
                </List>
            </Drawer>
            <WrapperMain component="main">
                {/*<DrawerHeader />*/}
                <AppRouter />
            </WrapperMain>
        </Box>
    );
}