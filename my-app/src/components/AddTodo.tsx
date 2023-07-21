import React from 'react';

type Props = TodoProps & {
updateTodo: (todo: ITodo) => void
deleteTodo: (todo: ITodo) => void
}