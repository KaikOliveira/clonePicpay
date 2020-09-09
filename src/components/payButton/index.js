import React from 'react';
import { TouchbleWithoutFeedback } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


import { Button, Label } from './style';


export default function PayButton({ onPress }) {
    
    return (
    <TouchbleWithoutFeedback onPress={onPress} >
        <Button
            colors={['#00fc6c', '#00ac4a']}
            start={[1, 0.2]}
        >
            <MaterialIcons name="attach-money" size={30} color="#fff" />
            <Label>Pagar</Label>
        </Button>
    </TouchbleWithoutFeedback>
    );
}
