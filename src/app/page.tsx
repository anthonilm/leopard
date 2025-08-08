import { siteMeta } from '@/lib/meta';
import Home from './Home';

export const metadata = {
  title: siteMeta.routes['/'].title,
  description: siteMeta.routes['/'].description,
};

export default Home;
