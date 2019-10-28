import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../components/Loader';
import logo from '../assets/images/logo.jpg';

const { width: WIDTH } = Dimensions.get('window'); 
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            about: '',
            showPass: true,
            press: false,
            isVisible: false
        }
    }

    static navigationOptions = {
        header: null
      };

      static get options() {
        return {
          topBar: {
            visible: false,
            animate: false
          }
        };
      }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={styles.backgroundContainer}>
              {/* <Loader loading={this.state.loading} /> */}
                <KeyboardAwareScrollView>
                <View style={styles.logoContainer}>
                    <Text style={styles.WelcomeText}>SignUp</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.introText}>Let's set up your account real quick!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name={'ios-person'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your Username'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name={'email'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your email'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name={'textbox-password'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your pasword'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <AntDesign name={'layout'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'About you'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={styles.tipText} onPress={() => this.props.navigation.navigate('SignIn')} >Already have an account? Signin</Text>
                    </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}
const styles = {
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: '#3b6cac',
        marginTop: 40
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        width: 120,
        height: 120 
    },
    logoText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    WelcomeText: {
        color: 'white',
        fontSize: 25,
        marginTop: 50,
        padding: 5
    },
    introText: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        padding: 5
    },
    tipText: {
        color: 'white',
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textDecorationLine: 'underline'
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHoriontal: 25
    },
    dateText: {
        color: 'white',
        fontSize: 15,
        marginTop: 14,
        paddingLeft: 70
    },
    dateContainer: {
        borderColor: 'black',
        borderWidth: 1,
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37 
    },
    inputContainer: {
        marginTop: 5
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 37  
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#2b6877',
        justifyContent: 'center',
         marginTop: 20
    },
    text: {
        color: 'white',
         fontSize: 16,
         textAlign: 'center'
    }
}
 
export default SignUp;