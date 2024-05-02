import {Fragment, memo} from 'react';
import { styled } from 'styled-components';
import Box from "@mui/material/Box";
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs";
import {CardComponent} from "../../components/Card/Card";
import {listCards} from "../../utils/listCards";


const WrapperBreadCrumbs = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))

const Title = styled('h1')(() => ({
    margin: 0
}));

const WrapperCards = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20
}));

export const Dashboard = memo((): JSX.Element => {
    return (
        <>
            <WrapperBreadCrumbs>
                <Title>Dashboard</Title>
                <BreadCrumbs title='test' />
            </WrapperBreadCrumbs>
            <WrapperCards>
                {
                    listCards.map((listCard) => (
                        <Fragment key={listCard.key}>
                            <CardComponent
                                title={listCard.title}
                                description={listCard.description}
                                time={listCard.time}
                                avatars={listCard.avatars}
                            />
                        </Fragment>
                    ))
                }
            </WrapperCards>
        </>
    )
});

Dashboard.displayName = 'Dashboard';