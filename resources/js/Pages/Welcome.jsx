import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Layouts/Nav';
import Home from '@/Layouts/Home';

export default function Welcome(props) {
    return (
        <>
            <Head title="Caroline Rush" />
            <Nav data={props}/>
            <Home data={props}/>
        </>
    );
}
