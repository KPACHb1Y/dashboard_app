import {memo} from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface IProp {
    title: string
}
export const BreadCrumbs = memo(({ title }: IProp) => {

    const handleClick = () => {
        console.log(title);
    }

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                >
                    Menu
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="#"
                    aria-current="page"
                >
                    Dashboard
                </Link>
            </Breadcrumbs>
        </div>
    )
})