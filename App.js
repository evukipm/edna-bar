import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './stylesheet'

class App extends React.Component {

    state ={ 
      isLoading: true,
      coctail: [],
    }

  componentDidMount () {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(result => {
      console.log(result.drinks)
      this.setState({
        isLoading: false,
        coctail: result.drinks,
      })
    })
    .catch((error) =>{
      console.error(error);
    });
  }
  
  
  render() {
    const { isLoading, coctail } = this.state
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Awaiting for response</Text> : coctail.map((item, index) => {
          return <View key={index}>
            <Text style={styles.title}>{item.strDrink}</Text>
            <Text>{item.strCategory}</Text>
            <Image style={{width: 100, height: 100}} source={{uri: item.strDrinkThumb}}/>
            <Text>{item.strInstructions}</Text>
          </View>
        })}
      </View>
    );
  }
}

export default App;
