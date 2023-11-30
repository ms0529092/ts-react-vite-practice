import React from 'react';

import Home from '@/container/HomePage';
import TodoList from '@/container/TodoListPage';

export const routerConfig = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/todoList',
        element:<TodoList />
    }
];

