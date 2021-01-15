import { Route } from 'react-router-dom'
import AppLayout from './AppLayout/AppLayout'

const AppLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={matchProps => (
                <AppLayout>
                    <Component {...matchProps} />
                </AppLayout>
            )
            }
        />
    );
};

export default AppLayoutRoute;