import React, {useEffect, useState} from 'react';
import AdminLogin from '../components/AdminLogin';

const Home = (props: {name: string}) => {

    console.log(props.name + ' is home')

    return (
        <div className='text-center Home d-flex align-items-center justify-content-center'>
            <div>
                <AdminLogin />
                {props.name ? 'Hi ' + props.name : 'You are not logged in'}      
            </div>                 
        </div>
    );
};

export default Home;