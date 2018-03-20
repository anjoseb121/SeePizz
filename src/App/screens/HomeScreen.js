import React, { Component } from 'react'
import { Alert, View, StatusBar, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-picker'
import Header from '../../components/Header'
import BackgroundImage from '../../components/BackgroundImage'
import XPButton from '../../components/XPBouton'
import styles from './styles'

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: <Header
      title='seepizz'
      subtitle='"The Shazam for Pizza"'
    />,
  }

  constructor() {
    super();

    this.state = {
      loading: false, // init loading state
    }

    this._onClick = this._onClick.bind(this); // fix _onClick context

    // Defines picker options

    this.options = {
      title: 'Sélectionner une image',
      takePhotoButtonTitle: 'Prendre une photo',
      chooseFromLibraryButtonTitle: 'Choisir depuis la galerie',
      cancelButtonTitle: 'Annuler',
      cameraType: 'back',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'Seepizz'
      }
    }
  }

  _onClick() {
    this.setState({
      loading: true,
    });
    // It will display picker passing my options
    ImagePicker.showImagePicker(this.options, response => {
      if (response.didCancel) {
        this.setState({
          loading: false,
        });
      } else if (response.error) {
        // If an error occurred during picking a picture, display native alert
        Alert.alert('Error', 'Verifica tus permisos para acceder a la cámara', {
          cancelable: false,
        });
        tihs.setState({
          loading: false,
        });
      } else {
        // Everything is fine, go to predict screen passing response
        const { navigate } = this.props.navigation;
        navigate('Prediction', { image: response });
        this.setState({ loading: false });
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <BackgroundImage sourche={require('../../assets/bkg.jpg')}>
        {
          !this.state.loading ?
            <XPButton
              title="Analyser une image"
              onPress={this._onClick}
            /> :
            <ActivityIndicator size="large"
              color="#e74c3c"
            />
        }
        </BackgroundImage>
      </View>  
    );
  }
}