import { memo } from 'react';
import { styled } from 'styled-components';

const Title = styled.h1`
    font-size: 1em;
    text-align: center;
    color: #ccc;
`

export const Dashboard = memo((): JSX.Element => {
    return <Title>Dashboard</Title>
});

Dashboard.displayName = 'Dashbord';