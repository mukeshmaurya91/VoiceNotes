import React from 'react';
import { View, StyleSheet } from 'react-native';
const CardView = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 6
  }
});
export default CardView;