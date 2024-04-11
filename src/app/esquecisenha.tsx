import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';
export default function Cadastrar() {
    
  return (
   
    // div principal 
    <View style={styles.imagemBody}>
      { /*imagem logo senai*/}
      
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

      {/*inicio do formulario*/}
      <View style={styles.form}>
   
        {/* Texto da senha */}
          <Text style={styles.text}>Senha antiga:</Text>

        {/*input senha */}
          <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input}/>
          
        {/* Texto da senha */}
        <Text style={styles.text}>Nova senha:</Text>

        {/*input senha */}
         <TextInput secureTextEntry placeholder='Informe a senha nova' style={styles.input}/>
        <View style={styles.subBtn}>
          <TouchableOpacity><Link href={'login'} style={styles.subBtn1}>Login</Link></TouchableOpacity>
        </View>
       <View style={styles.formbtn}>
          <Link href={"login"} style={styles.btn}>Atualizar</Link>
       </View>
      </View>
    </View>
    );
}
