import React from 'react';
import { Text } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const Big = {
    args: {
        size: 'big',
    }
};

export const Small = {
    args: {
        size: 'small',
    }
};

export const Default = () => <Text />;