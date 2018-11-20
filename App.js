import React from 'react';
import { View } from 'react-native';
import { styles } from './stylesheet'

import Coctail from './components/Coctail'

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
            return <Coctail key={index} data={coctail}/>
        })}
      </View>
    );
  }
}

export default App;
