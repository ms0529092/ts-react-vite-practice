import React from 'react'
import { useRoutes } from 'react-router-dom';

import { routerConfig } from '@/router';

const App = () => {
    const element = useRoutes(routerConfig);

    return (
        <React.Fragment>
            {element}
        </React.Fragment>
    )
};

export default App;
