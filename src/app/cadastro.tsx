import { StatusBar } from 'expo-status-bar';
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

        {/* texto login */}
          <Text style={styles.text}>Usuário:</Text>

        {/*input login */}
          <TextInput placeholder='Insira seu CPF' style={styles.input}/>

        {/* Texto da senha */}
          <Text style={styles.text}>Senha:</Text>

        {/*input senha */}
          <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input}/>
          
        {/* Texto da senha */}
        <Text style={styles.text}>Confirme sua senha:</Text>

        {/*input senha */}
         <TextInput secureTextEntry placeholder='Confirme sua senha' style={styles.input}/>
        <View style={styles.subBtn}>
          <TouchableOpacity><Link href={'login'} style={styles.subBtn1}>Login</Link></TouchableOpacity>
        </View>
       <View style={styles.formbtn}>
          <Link href={"login"} style={styles.btn}>Cadastrar</Link>
       </View>
      </View>
    </View>
    );
}
