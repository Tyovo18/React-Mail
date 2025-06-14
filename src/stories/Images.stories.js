import React from 'react';
import { Images } from './Images';

export default {
    title: 'Components/Images',
    component: Images,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Small1 = {
    args: {
        className: 'small1',
    },
};

export const Small12 = {
    args: {
        className: 'small12',
    },
};

export const Default = () => <Images />;