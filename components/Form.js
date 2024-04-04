import { StyleSheet, Text, View, Platform , } from 'react-native';
import {RECAPTCHA_SITE_KEY} from  '@env';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import React, { useState, } from 'react';
import axios from 'axios';
import { Toast } from "react-native-toast-message/lib/src/Toast";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {

    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
        services: [
            {
                name: `Full Stack Developer`,
                selected: false,
            },
            {
                name: `Backend Developer`,
                selected: false,
            },
            {
                name: `Frontend Developer`,
                selected: false,
            },
            {
                name: `iOS Developer`,
                selected: false,
            },
            {
                name: `Android Developer`,
                selected: false,
            },
            {
                name: `WordPress Management`,
                selected: false,
            },
        ]
    });


    const handleStateChange = (name, value) => {
        setMailerState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (index) => {
        setMailerState((prevState) => {
            const newServices = [...prevState.services];
            newServices[index] = {
                ...newServices[index],
                selected: !newServices[index].selected,
            };

            return {
                ...prevState,
                services: newServices,
            };
        });
    };

    const [loading, setLoading] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const onChange = (value) => {
        setRecaptchaValue(value);
    };

    const submitEmail = async () => {
        if (!recaptchaValue) {
            Toast.show({
                type: 'error',
                text1: 'Please complete the reCAPTCHA before submitting.'
            });
            return;
        }

        if (!mailerState.name || !mailerState.email || !mailerState.message) {
            Toast.show({
                type: 'error',
                text1: 'Validation Error',
                text2: 'Please fill in all required fields.',
            });
            return;
        }

        console.log('Current mailerState:', mailerState);

        try {
            setLoading(true);

            const response = await axios.post("https://curtis-portfolio-server.onrender.com/send", {
                mailerState,
            }, {
                timeout: 10000,
            });

            const resData = response.data;
            console.log(resData);
            console.log('Current mailerState:', mailerState);


            if (resData.status === 'success') {
                Toast.show({
                    type: 'success',
                    text1: 'Message Sent',
                });


            } else if (resData.status === 'fail') {
                Toast.show({
                    type: 'error',
                    text1: 'Message failed to send',
                });
            }
            setMailerState({
                email: "",
                name: "",
                message: "",
                services: [
                    {
                        name: `Full Stack Developer`,
                        selected: false,
                    },
                    {
                        name: `Backend Developer`,
                        selected: false,
                    },
                    {
                        name: `Frontend Developer`,
                        selected: false,
                    },
                    {
                        name: `iOS Developer`,
                        selected: false,
                    },
                    {
                        name: `Android Developer`,
                        selected: false,
                    },
                    {
                        name: `WordPress Management`,
                        selected: false,
                    },
                ]
            });
        } catch (error) {
            console.error('Error submitting email:', error);
            Toast.show({
                type: 'error',
                text1: 'Submission Error',
                text2: 'An error occurred while submitting the form. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#800000' }} >Contact TRI Financial Services for a Quote</Text>
            <TextInput
                mode='outlined'
                label='Name'
                placeholder="Name"
                value={mailerState.name}
                onChangeText={(text) => handleStateChange('name', text)}
            />
            <TextInput
                label='Email'
                mode='outlined'
                placeholder="Email"
                value={mailerState.email}
                onChangeText={(text) => handleStateChange('email', text)}
            />
            <TextInput
                mode='outlined'
                Label='Message'
                placeholder="Message"
                value={mailerState.message}
                onChangeText={(text) => handleStateChange('message', text)}
                multiline
                numberOfLines={4}
            />

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {mailerState.services &&
                    mailerState.services.map((service, index) => (
                        <Checkbox.Item
                            key={index}
                            label={service.name}
                            status={service.selected ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange(index)}
                        />
                    ))}
            </View>

            {Platform.OS === 'web' && <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={onChange}

            />}

            <Button
                icon='send'
                mode='text'
                onPress={submitEmail}
                disabled={loading}
                textColor='#800000'>
                {loading ? 'Sending...' : 'Send'}
            </Button>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({})