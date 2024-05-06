import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {DotMenu} from "../DotMenu/DotMenu";
import { BiFolder } from "react-icons/bi";
import {listProjectSummary} from "../../utils/listProjectSummary";

const WrapperCard = styled(Card)(() => ({
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.1)'
}));

const WrapperTitle = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const WrapperList = styled(List)(() => ({
    maxWidth: '100% !important',
    width: '100%'
}));

const WrapperListItem = styled(ListItem)(() => ({
    border: '1px solid rgba(229, 231, 235, 1)',
    borderRadius: 5,
    marginTop: 15,
    '&:first-of-type': {
        marginTop: 0
    }
}));

export const ProjectSummary = () => {
    return (
        <WrapperCard sx={{ minWidth: 500}}>
            <CardContent>
                <WrapperTitle>
                    <Typography variant="h6" component="div">
                        Project Summary
                    </Typography>
                    <DotMenu />
                </WrapperTitle>
                <Box>
                    <Typography>
                        <BiFolder />
                        38 Total Admin & Client Projects
                    </Typography>
                </Box>
                <Box>
                    <WrapperList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            listProjectSummary.map((list) => {
                                return (
                                    <WrapperListItem key={list.key}>
                                        <ListItemAvatar>
                                            <Avatar>{list.avatar}</Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={list.primaryText} secondary={list.secondaryText} />
                                    </WrapperListItem>
                                )
                            })
                        }
                    </WrapperList>
                </Box>
            </CardContent>
        </WrapperCard>
    )
}