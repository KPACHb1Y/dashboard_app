import {memo} from 'react';
import { styled } from 'styled-components';
import Box from "@mui/material/Box";
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs";
import {CardComponent} from "../../components/Card/Card";
import {listCards} from "../../utils/listCards";
import {ProjectSummary} from "../../components/ProjectSummary/ProjectSummary";
import {Chart} from "../../components/Charts/Chart";
import {ChartBar} from "../../components/Charts/ChartBar";
import {Tag} from "../../components/Tag/Tag";
import {listTag} from "../../utils/listTag";

const Wrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
}));

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
    marginTop: 20,
}));

const WrapperCharts = styled(Box)(() => ({
    display: 'flex',
    marginTop: 20,
}));

const WrapperChart = styled(Box)(() => ({
    background: '#fff',
    marginRight: 20,
    boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.1)',
    borderRadius: 5
}))

export const Dashboard = memo(() => {
    return (
        <>
            <WrapperBreadCrumbs>
                <Title>Dashboard</Title>
                <BreadCrumbs title='test' />
            </WrapperBreadCrumbs>
            <Wrapper>
                <Box>
                    <Box>
                        <WrapperCards>
                            {
                                listCards.map((listCard) => (
                                    <CardComponent
                                        title={listCard.title}
                                        description={listCard.description}
                                        time={listCard.time}
                                        avatars={listCard.avatars}
                                    />
                                ))
                            }
                        </WrapperCards>
                    </Box>
                    <WrapperCharts>
                        <WrapperChart style={{ width: 400, height: 400 }}>
                            <Chart />
                        </WrapperChart>
                        <WrapperChart style={{ width: 850, height: 400 }}>
                            <ChartBar />
                        </WrapperChart>
                    </WrapperCharts>
                </Box>
                <Box>
                    <ProjectSummary />
                </Box>
            </Wrapper>
            <Box style={{ display: 'flex', marginTop: 20 }}>
                {
                    listTag.map((list) => (
                        <Tag title={list.title} subTitle={list.subTitle} />
                    ))
                }
            </Box>
        </>
    )
});

Dashboard.displayName = 'Dashboard';