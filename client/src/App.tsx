import React, {useEffect, useState} from 'react';
import './App.css';

interface Position {
    latitude: number;
    longitude: number;
}

interface Route {
    title: string;
    startPosition: Position;
    endPosition: Position;
}

function App() {
    const [routes, setRoutes] = useState<Route[]>();

    useEffect(() =>{
        fetch("http://localhost:3000/routes")
            .then(res => res.json())
            .then(
                (result) => {
                setRoutes(result);
                },
                (error) => {
                    console.log(error);
                })
        }, []);
    return (
        <ul style={{listStyle: "none"}}>
            {routes?.map(route => (
                <li key={route.title}>
                    <h3>{route.title}</h3>
                    <h4>StartPosition:</h4>
                    {route.startPosition.latitude}
                    {route.startPosition.longitude}
                    <h4>EndPosition:</h4>
                    {route.endPosition.latitude}
                    {route.endPosition.longitude}
                </li>
            ))}
        </ul>
    );
}

export default App;
