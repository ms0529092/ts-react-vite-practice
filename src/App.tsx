import React from 'react'
import { useRoutes } from 'react-router-dom';

import { routerConfig } from '@/router';

const App = () => {
    const element = useRoutes(routerConfig);

    return (
        <React.Fragment>
            <div className='container'>
                <div className='page'>{element}</div>
            </div>
        </React.Fragment>
    )
};

export default App;
