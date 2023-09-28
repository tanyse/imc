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

const style = StyleSheet.create({
    container:{
      backgroundColor: '#008080',
      flex:1, 
      justifyContent:"center", 
      margin:10,
    },
    inputs:{
      height: 40, 
      borderColor: '#000000', 
      borderWidth: 1, 
      marginBottom: 10, 
      paddingLeft: 10, 
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
