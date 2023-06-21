import { createRoot } from 'react-dom';

import  App  from './components';
import Login from './components/Login';
import Tabs from './components/Tabs';


const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`

const root = createRoot(document.querySelector('#app'));

root.render(
    <div> 
        <Login />
        <Tabs />
<App/>
</div>
);

