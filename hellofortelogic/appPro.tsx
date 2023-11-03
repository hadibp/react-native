import React from 'react';

import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function AppPro(): JSX.Element {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.continer}>
      <Text style={isDark ? styles.whitetext : styles.blacktext}>
        hello world
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whitetext: {
    color: '#ffffff',
  },
  blacktext: {
    color: '#000000',
  },
});

export default AppPro;
