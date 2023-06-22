import { createRoot } from 'react-dom';

import  App  from './components';
import Login from './components/Login';
import Tabs from './components/Tabs';
import Pactivities from './components/activities';


const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`

const root = createRoot(document.querySelector('#app'));

root.render(
    <div> 
        <Login />
        <App/>
        <Tabs />
        <Pactivities/>
</div>
);

