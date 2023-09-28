import { Text, View, StyleSheet, Button, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

export default function App() {
  const [altura,setAltura] = React.useState<number>(0.0)
  const [massa,setMassa] = React.useState<number>(0.0)
  const [resultado, setResultado] = React.useState<string>('')

  function handleOnchangeAltura(texto: string){
    const alturaChange = parseFloat(texto)
    setAltura(alturaChange)
  } 

  function handleOnchangeMassa(texto: string){
    const massaChange = parseFloat(texto)
    setMassa(massaChange)
  }

  function calcular(){
    const alturaEmMetro = altura/100
    const imc = (massa / (altura * altura)).toFixed(2);
    if(!isNaN(Number(imc))){
      setResultado(imc)
    }else{
        setResultado("Insira um número.")
      }
  }

  function resetar(){
    setAltura(0.0)
    setMassa(0.0)
    setResultado('')
  }

  return (
    <View style={style.container} >
      <Text style={style.text}>CALCULADORA IMC</Text>
      <TextInput style={style.inputs} placeholder='Altura' onChangeText={handleOnchangeAltura} keyboardType='numeric' />
      <TextInput style={style.inputs} placeholder='Massa' onChangeText={handleOnchangeMassa} keyboardType='numeric' />
      <View  style={style.containerButton}>
          <Button color='#000000' onPress={calcular} title='Calcular'/>
          <Button color= '#000000' onPress={resetar} title='Resetar'/>
      </View>
      <Text style={{textAlign:"center",margin:10,}}>{`Altura:${altura}`}</Text>
      <Text style={{textAlign:"center",margin:10,}}>{`Massa:${massa}`}</Text>
      <Text style={{textAlign:"center",margin:10,}}>{`Resultado:${resultado}`}</Text>
    </View>
  );
}

// nao colocar o onclick no text
// a div sempre vai ser flexbox 0
// button não aceita style

const style = StyleSheet.create({
    container:{
      backgroundColor: '#008080',
      flex:1, // definindo o espaço para toda tela
      justifyContent:"center", /// todos que estão na horizontal está no centro
      margin:10, //se descolar 10px para cada lado
    },
    inputs:{
      height: 40, // altura de 40 cm
      borderColor: '#000000', // borda cinza
      borderWidth: 1, //borda de altura
      marginBottom: 10, //se desloca 10px para cima
      paddingLeft: 10, // cria uma area de 10px na sua esquerda
    },
    text:{
      textAlign: 'center',
      margin: 70,
      fontSize: 24,
      color: '#ffffff',
    },
    containerButton:{
     display:'flex',
     gap: 8,
    },

})
