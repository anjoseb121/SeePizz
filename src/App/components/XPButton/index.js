import React from 'react';
import { View, Text, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles';

const XPButton = props => {
  const {
    title,
    color,
    accessibilityLabel,
    disabled,
    textOnly,
    onPress,
    onLongPress,
  } = props;

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (color) {
    if (!textOnly) {
      if (Platform.OS === 'ios') {
        textStyles.push({ color: color });
      } else {
        buttonStyles.push({ backgroundColor: color });
      }
    } else {
      textStyles.push({ color: color});
      buttonStyles.push(styles.textOnly);
    }
  }
}