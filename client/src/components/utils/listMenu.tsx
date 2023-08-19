import { ReactElement } from 'react';
import { BiCalendar, BiEnvelope, BiCheck, BiBarChartAlt, BiIdCard } from 'react-icons/bi';

type ListMenu = {
    key: string;
    span: string;
    icon: boolean;
    iconType: ReactElement;
    path: string;
}

export const listMenu: ListMenu[] = [
    {
        key: '1',
        span: 'Dashboard',
        icon: true,
        iconType: <BiBarChartAlt />,
        path: '/dashboard',
    },
    {
        key: '2',
        span: 'Calendar',
        icon: true,
        iconType: <BiCalendar />,
        path: '/calendar',
    },
    {
        key: '3',
        span: 'Mail',
        icon: true,
        iconType: <BiEnvelope />,
        path: '/mail',
    },
    {
        key: '4',
        span: 'Todo',
        icon: true,
        iconType: <BiCheck />,
        path: '/todo',
    },
    {
        key: '5',
        span: 'Contacts',
        icon: true,
        iconType: <BiIdCard />,
        path: '/contacts',
    }
]