//Config/routes.jsx

import SignUp from '../Pages/SignUp';
// import SignIn from '../Pages/SignIn';
// import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/PageNotFound';

const routes = [
    // {
    //     path: '/',
    //     component: SignIn
    // },
    {
        path: '/users/register',
        component: SignUp
    },
    // {
    //     path: '/dashboard',
    //     component: Dashboard
    // },
    {
        path: '/*',
        component: PageNotFound
    }
];

export default routes;