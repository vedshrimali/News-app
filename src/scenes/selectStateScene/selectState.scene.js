import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { navigate } from '../../services/navigation.service';

function SelectState({ }) {
  const [stateNames, setStateNames] = useState([]);

  useEffect(() => {
    fetchState();
  }, [])

  function fetchState() {
    firebase.firestore().collection("locations").get().then((snapshot) => {
      const states = [];
      snapshot.docs.forEach((doc) => {
        states.push(doc.data().state);
      })
      setStateNames(states);
    })
  }

  

  return (
    <View style={styles.container} >
      <View style={{ height: 50, flexDirection: "row", backgroundColor: "#6C63FF", position: "absolute", top: 0, left: 0, right: 0 }}>
        <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
          <Image source={require('../../assets/png/Vector.png')} style={styles.image} />
        </View>
        <View style={{ flex: 0.9, alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.selectstate}> Select State </Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 50 }} >
        {
          stateNames.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate("SelectDistrict", { stateName: item, abc: "123" })
                }}
                style={{ height: 50, flexDirection: "row" }}>
                <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                  <Image source={require('../../assets/png/map.png')} style={styles.mapimage} />
                </View>
                <View style={{ flex: 0.9, alignItems: "flex-start", justifyContent: "center" }}>
                  <Text style={styles.statename}> {item} </Text>
                </View>
              </TouchableOpacity>
            )
          }
          )
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 25,
    height: 21.44,
    top: 1.78,
  },
  selectstate: {
    fontSize: 20,
    width: 130,
    height: 27,
    fontStyle: "normal",
    fontWeight: 400,
    top: 30,
    color: 'white',
  },
  mapimage: {
    width: 20,
    height: 20
  },
  statename: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 400,
    top: 30,
    left: 120,
    color: '#000000',
  }


})

export default SelectState;