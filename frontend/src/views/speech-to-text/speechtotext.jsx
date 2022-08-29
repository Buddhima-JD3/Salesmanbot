import React, {useState} from "react";
import {Button} from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import chat from "../chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import SendMessage from '../chat/SendMessage'

import speechToTextUtils from "./utils/utility_transcribe";
import TranscribeOutput from "./utils/TranscribeOutput";
import SettingsSections from "./utils/SettingsSection";
import {Input} from "@material-ui/core";

const useStyles = () => ({
    root: {

        // borderTop: '1px solid lightgray',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: '#fafafa !important',
    },
    title: {
        // marginBottom: '20px',
    },
    settingsSection: {
        marginBottom: '20px',
    },
    buttonsSection: {
       // flex: '1',
    },
    speech: {
        /* (A2) COLORS */
        color: '#fff',
        background: '#a53d38',

        /* (A3) DIMENSIONS + POSITION */
        position: 'relative',
        padding: '20px',
        borderRadius: '19px',
        maxWidth: '700px',

    }

});


const App = ({classes}) => {
    const [transcribedData, setTranscribedData] = useState([]);
    const [interimTranscribedData, setInterimTranscribedData] = useState('');
    const [isRecording, setIsRecording] = useState(false);

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
                languageCode: 'en-US',
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
            });
    }

    function onStop() {
        setIsRecording(false)
        console.log({transcribedData});
        flushInterimData() // A safety net if Google's Speech API doesn't work as expected, i.e. always sends the final result
        speechToTextUtils.stopRecording();
    }

    return (
        <div class="flex-container" className={classes.root}>
            <div class="flex-child magenta" className={classes.buttonsSection}>
                {!isRecording && <Button onClick={onStart} variant="primary" style={{
                    borderRadius: '56%', margin: '7px', padding: '12px', height: '56px',
                    width: '55px'
                }}><i className="fa-solid fa-microphone fa-lg"></i></Button>}
                {isRecording && <Button onClick={onStop} variant="danger" style={{
                    borderRadius: '56%', margin: '7px', padding: '12px', height: '56px',
                    width: '55px'
                }}><i className="fa-solid fa-microphone fa-lg"></i></Button>}
            </div>

            <div>
                <Input placeholder='Message...' type="text" value={transcribedData}   onChange={e => setMsg(e.target.value)} />
                    <TranscribeOutput transcribedText={transcribedData}
                                      interimTranscribedText={interimTranscribedData}/>
            </div>
        </div>
    );
}

export default withStyles(useStyles)(App);


