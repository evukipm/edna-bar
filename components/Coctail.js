import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { styles } from '../stylesheet'

class Coctail extends Component {
  render() {
    const { strDrink, strCategory, strDrinkThumb, strInstructions} = this.props.data
    return (
        <View>
            <Text style={styles.title}>{strDrink}</Text>
            <Text>{strCategory}</Text>
            <Image style={{width: 100, height: 100}} source={{uri: strDrinkThumb}}/>
            <Text>{strInstructions}</Text>
        </View>
    )
  }
}

export default Coctail;
