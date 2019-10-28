import React, { Component} from 'react';
import {View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../components/Loader';
import logo from '../assets/images/profileImg.jpeg';

const { width: WIDTH } = Dimensions.get('window'); 
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.WelcomeText}>Anayo Oleru</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.description}>anayo_oleru@outlook.com</Text>
                    
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>About</Text>
                    <Text style={styles.description}> 
                    There's no one way to go about this, but I have a few tricks up my sleeve that 
                    might help you spice up your About page. One of the best and easiest methods 
                    is to open your “About Me” with a punchy statement that perfectly captures what 
                    your attitude and style—the things that make you, well—you!
                    </Text>
                </View>
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
        marginTop: 40,
        padding: 20
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50
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
        color: 'black',
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
    text: {
        color: 'black',
         fontSize: 16,
         textAlign: 'center',
         fontWeight: '500',
         marginTop: 20
    },
    description: {
        textAlign: 'center'
    }
}
 
export default Profile;