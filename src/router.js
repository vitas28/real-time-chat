import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';
import { AUTH_ROUTE, CHAT_ROUTE } from './utils/routerConsts';

export const publicRoutes = [{ path: AUTH_ROUTE, element: <Auth /> }];

export const privateRoutes = [{ path: CHAT_ROUTE, element: <Chat /> }];
