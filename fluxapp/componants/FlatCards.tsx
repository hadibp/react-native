import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Flatcards = () => {
  return (
    <ScrollView alwaysBounceVertical={true}>
      <View>
        <Text style={styles.headingtext}>Flatcards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardone]}>
            <Text style={styles.cardone}>Red</Text>
          </View>
          <View style={[styles.cardtwo, styles.card]}>
            <Text style={styles.cardtwo}>Yellow</Text>
          </View>
          <View style={[styles.cardthree, styles.card]}>
            <Text style={styles.cardthree}>violet</Text>
          </View>
          <View style={[styles.card, styles.cardone]}>
            <Text style={styles.cardone}>Red</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Flatcards;

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
    flex: 1,
    flexDirection: 'row',
  },

  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 12,
  },

  cardone: {
    backgroundColor: '#EF431F',
    color: '#FFC300',
  },

  cardtwo: {
    backgroundColor: '#00B52F',
    color: '#EF431F',
  },
  cardthree: {
    backgroundColor: '#4D00B5',
    color: '#FFFFFE',
  },
});
