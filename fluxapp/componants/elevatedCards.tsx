import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated Cards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.elevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text>.....!</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    //   flex:1,
    margin: 8,
    //   flexDirection:"row",
  },
  elevated: {
    backgroundColor: '#EF431F',
    elevation:4,
    shadowOffset:{
        width:1,height:1
    }
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    margin: 12,

  },
});
