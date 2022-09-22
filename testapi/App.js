/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const[data, setData] = useState([])
  const[loading, setLoading] = useState(true)


  const url = 'https://api.apify.com/v2/acts/hynekhruska~indeed-scraper/runs/last/dataset/items?token=apify_api_UVXFSPehNgzoyQErccJsQSYLI58DHR22GhDM'

  useEffect(() => {
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=> console.error(error))
    .finally(()=>setLoading(false))
  }, [])

  return (
        <View >
          {loading ? (<Text>Loading...</Text>) : (
            data.map((post)=>(
              <View
              style={{alignContent: 'center'}}>
                <Text
                style={{fontSize: 25}}
                >
                  Position name: {post.positionName}
                </Text>
                <Text
                style={{fontSize: 20}}
                >
                  Company: {post.company}
                  Location: {post.location}
                </Text>
              </View>
            ))
          )}
        </View>
  );
}




export default App;
