import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);


    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <WaveIndicator color='#4169E1' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Splash;
