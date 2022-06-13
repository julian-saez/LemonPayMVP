import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles.jsx'

const Title = ({title}) => {
    return(
        <View>
            <Text style={Styles.title}>{title}</Text>
        </View>
    )
}

export default Title;