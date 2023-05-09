//Layout
import { HeaderOnly } from '../components/\bLayout'
import routesConfig from '../config/routes'

//Pages
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Live from '../pages/Live'
import Explore from '../pages/Explore'


//PublicRoutes
const publicRoutes = [
    { path:routesConfig.home, Component : Home },
    { path:routesConfig.following, Component : Following },
    { path:routesConfig.profile, Component : Profile },
    { path:routesConfig.live, Component : Live },
    { path:routesConfig.explore, Component : Explore },
    { path:routesConfig.upload, Component : Upload, layout: HeaderOnly},
];



const privateRoutes = [];


export {publicRoutes,privateRoutes};