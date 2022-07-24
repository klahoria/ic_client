import { Dashboard } from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


const Routes = () => {
  return [
    {
      path: "/login",
      exact: false,
      element: Login,
    },
    {
      path: "/register",
      exact: true,
      element: Register
    },
    {
      path:'/dashboard',
      exact: true,
      element: Dashboard,
      type: 'private'
    }
  ];
};

export default Routes();
