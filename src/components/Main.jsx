import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { globalContext } from './context/Context';

const Main = () => {
    let { get_data } = useContext(globalContext)
    return (
        <div className='container-card'>
            {
                get_data.map((res, pos) => {
                    return (
                        <Card info={res} key={pos} />
                    )
                })
            }
        </div>
    );
}

export default Main;
