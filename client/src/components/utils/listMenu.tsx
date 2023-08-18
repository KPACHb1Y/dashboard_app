import { ReactElement } from 'react';
import { BiCalendar, BiEnvelope, BiCheck, BiBarChartAlt, BiIdCard } from 'react-icons/bi';

type ListMenu = {
    key: string;
    span: string;
    icon: boolean;
    iconType: ReactElement;
}

export const listMenu: ListMenu[] = [
    {
        key: '1',
        span: 'Dashboard',
        icon: true,
        iconType: <BiBarChartAlt />
    },
    {
        key: '2',
        span: 'Calendar',
        icon: true,
        iconType: <BiCalendar />
    },
    {
        key: '3',
        span: 'Mail',
        icon: true,
        iconType: <BiEnvelope />,
    },
    {
        key: '4',
        span: 'Todo',
        icon: true,
        iconType: <BiCheck />
    },
    {
        key: '5',
        span: 'Contacts',
        icon: true,
        iconType: <BiIdCard />
    }
]