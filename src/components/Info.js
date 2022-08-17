import React from "react";
import { Image, Text, TouchableNativeFeedback, View } from "react-native";
import { Navbar } from "./Navbar";
import { styles } from "./styles";

export const Info = () => {
  return (
    <View>
    <Navbar/>
      <View style={styles.containerDarker}></View>
      <View style={styles.container}>
        <Text style={styles.titleInfo}>HOTEL INFO</Text>
        <View style={styles.mainContainerInfo}>
          <View style={styles.column}>
            <Text style={styles.tableText}>RECEPTION PHONE NUMBER: +34 910 555 555</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.tableText}>ROOM PHONE NUMBER: +34 910 555 556 #EXT (ROOM NUMBER)</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.tableText}>24H HELPLINE: +34 912 555 555</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.tableText}>ADDRESS: CALLE DE LA PRINCESA, 31. MADRID 28008</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.tableText}>EMERGENCY NUMBER: 112</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
