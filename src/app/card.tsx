import { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {

  const [text, setText] = useState('');

  return (
    <View
      style={{
        padding: 20,
        marginTop: 55
      }}
    >

      <View
        style={{
          padding: 20,
          borderWidth: 1,
          borderRadius: 10
        }}
      >

        <Text>
          Welcome
        </Text>

        <Button
          title="Sign In"
          onPress={() => setText('Hello, Rushil!')}
        />

        <Text>
          {text}
        </Text>

      </View>

    </View>
  );
};

export default App;