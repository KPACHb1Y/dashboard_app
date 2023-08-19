import { Menu } from "antd";
import { listMenu } from "../utils/listMenu";
import { Link } from "react-router-dom";

export const MenuBar = () => {
    return (
        <div style={{ width: 200 }}>
            <Menu>
                {listMenu.map((itemMenu) => (
                    <Link to={itemMenu.path} key={itemMenu.key}>
                        <Menu.Item key={itemMenu.key}>
                            {itemMenu.iconType}
                            <span>{itemMenu.span}</span>
                        </Menu.Item>
                    </Link>
                ))}
            </Menu>
        </div>
    );
}