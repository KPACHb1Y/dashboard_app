import {memo, ReactNode} from "react";
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

interface IProp {
    icon: ReactNode;
    valueNav: string;
    index: number;
    path: string;
    selectedIndex: number,
    handleListItemClick: (index: number, path: string) => void;
}

export const ListItemNav = memo(({index, path, icon, valueNav, selectedIndex, handleListItemClick}: IProp) => {
    return (
        <ListItem disablePadding>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick(index, path)}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={valueNav}/>
            </ListItemButton>
        </ListItem>
    )
})