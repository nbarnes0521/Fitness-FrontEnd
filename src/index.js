import { createRoot } from 'react-dom/client';
import  App  from './components';


const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`

const root = createRoot(document.querySelector('#app'));

root.render(
<App/>
);

