import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AlertBox = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Add new alert</Text>
      </TouchableOpacity>

      <Text style={styles.label}>ETH</Text>
      <AlertBox />
      <AlertBox />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alertBox: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20,
    marginTop: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default AlertBox;
