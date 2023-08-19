import { memo } from 'react';

export const Todo = memo((): JSX.Element => {
    return <h1>Todo</h1>
});

Todo.displayName = 'Todo';