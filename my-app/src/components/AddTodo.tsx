import React from 'react';

type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void
    deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({
    todo,
    updateTodo,
    deleteTodo
}) => {
    const checkTodo: string = todo.status ? `line-through` : " "
    return (
        <div>
        </div>
    )
}