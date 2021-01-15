import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayoutRoute from '../Layout/AppLayoutRoute';


import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
import Landing from '../Pages/Landing/Landing'
import Home from '../Pages/Home/Home'
import Category from '../Pages/Category/Category'
import Library from '../Pages/Library/Library'
import Genre from '../Pages/Genre/Genre'
import Artist from '../Pages/Artist/Artist'

const Routes = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route path='/' exact component={Landing} />
            <AppLayoutRoute path='/home' component={Home} />
            <AppLayoutRoute path='/category' exact component={Category} />
            <AppLayoutRoute path='/category/:genre' component={Genre} />
            <AppLayoutRoute path='/library' component={Library} />
            <AppLayoutRoute path='/artist/:id' component={Artist} />
        </Switch>
    </Router >
)

export default Routes