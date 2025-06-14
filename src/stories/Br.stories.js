import React from 'react';
import { Br } from './Br';

export default {
    title: 'Component/Br',
    component: Br,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Hide = {
    args: {
        sm: 'hide',
    }
};



export const Default = () => <Br />;

