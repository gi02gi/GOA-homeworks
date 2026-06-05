import MyFirstComponent from "./components/MyFirstComponent";
import MySecondComponent from "./components/MySecondComponent";
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root')
createRoot(root).render(
    <div>
        <MyFirstComponent/>
        <MySecondComponent/>
    </div>
    
)