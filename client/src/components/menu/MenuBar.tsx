import { Menu } from "antd";
import { useState } from "react";
import { listMenu } from "../utils/listMenu";

export const MenuBar = () => {
    return (
        <div style={{ width: 200 }}>
            <Menu>
                {listMenu.map((itemMenu) => (
                    <Menu.Item key={itemMenu.key}>
                        {itemMenu.iconType}
                        <span>{itemMenu.span}</span>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
}