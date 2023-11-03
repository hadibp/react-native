import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Flatcards from './componants/FlatCards';
import ElevatedCards from './componants/elevatedCards';
import Fancycard from './componants/fancycard';
import ActionCard from './componants/ActionCard';
import ContactList from './componants/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Flatcards />
          <ElevatedCards />
          <Fancycard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
