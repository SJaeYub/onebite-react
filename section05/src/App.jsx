import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Bulb from './components/Bulb';
import Counter from './components/Counter';


function App() { // 부모 컴포넌트

    return (
        <>
            <Bulb/>
            <Counter/>
        </>
    );
}

export default App
