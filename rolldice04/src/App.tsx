import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// assets
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type Diceprops = PropsWithChildren<{imageUrl: ImageSourcePropType}>;

const Dice = ({imageUrl}: Diceprops): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setdiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDice = () => {
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomnumber);

    switch (randomnumber) {
      case 1:
        setdiceImage(DiceOne);
        break;
      case 2:
        setdiceImage(DiceTwo);
        break;
      case 3:
        setdiceImage(DiceThree);
        break;
      case 4:
        setdiceImage(DiceFour);
        break;
      case 5:
        setdiceImage(DiceFive);
        break;
      case 6:
        setdiceImage(DiceSix);
        break;

      default:
        setdiceImage(DiceSix);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.rollDiceBtnText}>Heelo images</Text>
      <Dice imageUrl={diceImage}></Dice>
      <Pressable onPress={() => rollDice()}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
