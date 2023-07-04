import Home from "../pages/home";
import News from '../pages/news'

const pages = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/news/:id",
    component: <News/>,
  },
];

const authRoutes = [];

export default { pages, authRoutes };
