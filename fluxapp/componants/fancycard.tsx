import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Fancycard() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.elevatedcard}>
      <Text style={styles.headingtext}>Fancycard</Text>

      <View style={[styles.card, styles.elevatedcard]}>
        {/* <Text>WELCOME</Text> */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
          }}
          style={styles.imagecard}
        />
        <Text style={styles.textcard}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          asperiores, error dolores enim ullam amet nulla voluptatibus illo
          excepturi provident neque accusamus! Veritatis consequuntur nihil
          laborum voluptas aut impedit nostrum.
        </Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    // flex:3,
    height: 300,
    backgroundColor: 'beige',
    margin: 8,
    borderRadius: 12,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecard: {
    height: 200,
    width: '95%',
    borderRadius: 12,
  },
  textcard: {
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
  elevatedcard: {},
});
