import { Route, useLocation } from 'react-router-dom'

import MainNavigation from '../Navigation/MainNavigation/MainNavigation'
import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category'
import Library from '../Pages/Library/Library'

const Main = () => {

    const location = useLocation();

    

    const path = ['/home', '/category', '/library'];

    const navigation = path.includes(location.pathname) ? < MainNavigation /> : null;

    return (
        <>
            {navigation}
            <Route path='/home' exact component={Home} />
            <Route path='/category' exact component={Category} />
            <Route path='/library' exact component={Library} />
        </>
    )
}



export default Main;