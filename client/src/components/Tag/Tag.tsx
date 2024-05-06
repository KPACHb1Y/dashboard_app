import { memo } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {DotMenu} from "../DotMenu/DotMenu";
import Box from "@mui/material/Box";

interface IProp {
    title: string;
    subTitle: string;
}

export const Tag = memo(({title, subTitle}: IProp) => {
    return (
       <Card sx={{ minWidth: 450 }}>
           <CardContent>
               <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <Typography variant="h5" component="div">
                       {title}
                   </Typography>
                   <DotMenu />
               </Box>
               <Box>
                   <Typography>
                       {subTitle}
                   </Typography>
               </Box>
           </CardContent>
       </Card>
    )
})

Tag.displayName = 'Tag'