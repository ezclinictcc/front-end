import EZClinikForgotPassword from "../../pages/PublicPages/ezclinikForgotPassword";
import EZClinikLogin from "../../pages/PublicPages/ezclinikLogin";
import EZClinikNewUser from "../../pages/PublicPages/ezclinikNewUser";
import PublicTemplate from "../../templates/PublicTemplate";


/**
 * @description Menu System.
 */
export const PublicRouteNavigator = [
  {
    name: 'Login',
    path: '/login',
    component: EZClinikLogin,
    currentPage: false,
    template: PublicTemplate,
    menuAccess: false,
    isPrivate: false,
},
{
  name: 'New User',
  path: '/new-user',
  component: EZClinikNewUser,
  currentPage: false,
  template: PublicTemplate,
  menuAccess: false,
  isPrivate: false,
},
{
  name: 'Forgot Password',
  path: '/forgot-password',
  component: EZClinikForgotPassword,
  currentPage: false,
  template: PublicTemplate,
  menuAccess: false,
  isPrivate: false,
},
];
