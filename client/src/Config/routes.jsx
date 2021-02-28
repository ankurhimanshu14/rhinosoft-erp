//Config/routes.jsx

import SignUp from '../Pages/SignUp';
// import SignIn from '../Pages/SignIn';
// import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/PageNotFound';

const routes = [
    // {
    //     path: '/',
    //     component: SignIn,
    //     isPrivate: false
    // },
    {
        path: '/users/register',
        component: SignUp,
        isPrivate: false
    },
    // {
    //     path: '/dashboard',
    //     component: Dashboard,
    //     isPrivate: true
    // },
    {
        path: '/*',
        component: PageNotFound,
        isPrivate: true
    }
];

export default routes;