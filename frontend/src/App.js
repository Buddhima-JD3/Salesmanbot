<<<<<<< HEAD

import React, {useState} from "react";
import {Button} from "react-bootstrap";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import speechToTextUtils from "./utility_transcribe";
import TranscribeOutput from "./TranscribeOutput";
import SettingsSections from "./SettingsSection";
=======
import React from "react";
import Router from "./Router"
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "react-use-cart";
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907



<<<<<<< HEAD
  const supportedLanguages = {'en-US': 'English', 'de-DE': 'German', 'fr-FR': 'French', 'es-ES': 'Spanish'}

  function flushInterimData() {
    if (interimTranscribedData !== '') {
      setInterimTranscribedData('')
      setTranscribedData(oldData => [...oldData, interimTranscribedData])
    }
  }

  function handleDataReceived(data, isFinal) {
    if (isFinal) {
      setInterimTranscribedData('')
      setTranscribedData(oldData => [...oldData, data])
    } else {
      setInterimTranscribedData(data)
    }
  }

  function getTranscriptionConfig() {
    return {
      audio: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: selectedLanguage,
      },
      interimResults: true
    }
  }

  function onStart() {
    setTranscribedData([])
    setIsRecording(true)

    speechToTextUtils.initRecording(
        getTranscriptionConfig(),
        handleDataReceived,
        (error) => {
          console.error('Error when transcribing', error);
          setIsRecording(false)
          // No further action needed, as stream already closes itself on error
        });
  }

  function onStop() {
    setIsRecording(false)
    flushInterimData() // A safety net if Google's Speech API doesn't work as expected, i.e. always sends the final result
    speechToTextUtils.stopRecording();
  }
=======
axios.defaults.withCredentials = true;

function App() {
  return (
    <CartProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </CartProvider>
  );
}

export default App;
>>>>>>> 1a91d0b6f549a1a455b867f016f0582b7d1f9907
