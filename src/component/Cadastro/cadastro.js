import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';

import IndexStyle from '../../style';
import Formulario from '../formulario/formulario';
import TextFormulario from '../formulario/textform';

const Cadastro = ({ nav }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repass, setRepass] = useState("");

    const auth = getAuth()
    async function handleCad  (e) {
        e.preventDefault
        createUserWithEmailAndPassword(auth, email, senha)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={IndexStyle.contentLogin}>
            <Image source={require('../../../assets/icons/Login/logo.png')} style={IndexStyle.logo}></Image>

            <Text style={IndexStyle.textTopo}>Cadastro</Text>


                <Formulario
                    espaço={'Repita a sua senha'}
                />
                
                <Pressable style={IndexStyle.button} onPress={ nav }>
                    <Text style={IndexStyle.textBtn}>Cadastro</Text>
                </Pressable>

            <Text style={IndexStyle.textIcon}>Se cadastre com</Text>

            <View style={IndexStyle.logos}>
                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_facebook.png')} style={IndexStyle.logoEx} />
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_google.png')} style={IndexStyle.logoEx} />
                </Pressable>

                <Pressable>
                    <Image source={require('../../../assets/icons/Login/icon_twitter.png')} style={IndexStyle.logoEx} />
                </Pressable>
            </View>
        </View>
    )
};

export default Cadastro;