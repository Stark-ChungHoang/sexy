import { Text, View,Menu } from 'react-native';
import SideMenu from 'react-native-side-menu'

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}


export default SideMenu = () => {
  const menu = <Menu navigator={navigator}/>;

  return (
    <SideMenu menu={menu}>
      <ContentView/>
    </SideMenu>
  );
}

