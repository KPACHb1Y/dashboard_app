import {memo} from "react";
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BiTime } from "react-icons/bi";
import Box from "@mui/material/Box";
import {Avatar} from "@mui/material";
import {DotMenu} from "../DotMenu/DotMenu";

type Avatars = {
    path: string;
    alt: string;
    style?: boolean;
}
interface IProp {
    title: string;
    description: string;
    time: string;
    avatars: Avatars[];
}

const WrapperCard = styled(Card)(() => ({
    marginRight: 20,
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.1)'
}));

const WrapperDescription = styled(Typography)(() => ({
    marginBottom: 15
}));

const WrapperTitle = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const WrapperFooterCard = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const WrapperHours = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    color: '#ddd'
}));

const WrapperAvatars = styled(Box)(() => ({
    display: 'flex',
}));

const AvatarChild = styled(Avatar)(() => ({
    marginRight: -15
}));

export const CardComponent = memo(({ title, description, time, avatars }: IProp) => {
    return (
        <WrapperCard sx={{ minWidth: 300, height: '150px' }}>
            <CardContent>
                <WrapperTitle>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <DotMenu />
                </WrapperTitle>
                <WrapperDescription color="text.secondary">
                    {description}
                </WrapperDescription>
                <WrapperFooterCard>
                    <WrapperHours>
                        <BiTime />
                        <span>{time}</span>
                    </WrapperHours>
                    <WrapperAvatars>
                        {
                            avatars.map((avatar) => {
                                if (avatar.style) {
                                    return <AvatarChild alt={avatar.alt} src={avatar.path}/>
                                }
                                return <Avatar alt={avatar.alt} src={avatar.path}/>
                            })
                        }

                    </WrapperAvatars>
                </WrapperFooterCard>
            </CardContent>
        </WrapperCard>
    )
});

CardComponent.displayName = 'CardComponent';