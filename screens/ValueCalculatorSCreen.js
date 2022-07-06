import { Button,StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

import { Formik } from 'formik'

export default function ValueCalculatorSCreen() {

    const [Total,setTotal]=useState();


    const handleSubmit=({BuyingPrice,Quantity})=>{
        setTotal((BuyingPrice*Quantity))
    }
  return (
    <View style={{backgroundColor:"#191c24",flex:1,}}>
        <Text style={{color:"white",fontSize:24,padding:20,top:50 }}>Invested Value Calculator</Text>
        <Formik
        initialValues={{ScripName:"",BuyingPrice:"",Quantity:"",Total:""}}
        onSubmit={handleSubmit}
        >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                <>
                <View style={{top:70}}>
                <Text style={{color:"#ffffff",fontSize:20}}>Scrip Name</Text>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={{color:"white",fontSize:17}}
                        onChangeText={handleChange("ScripName")}
                        onBlur={()=>setFieldTouched("ScripName")} 
                        selectionColor={'black'}
                        placeholder="ScripName"
                        />   
                    </View>

                    
                    <Text style={{color:"#ffffff",fontSize:20}}>Buying Price</Text>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={{color:"white",fontSize:17}}
                        onBlur={()=>setFieldTouched("BuyingPrice")} 
                        onChangeText={handleChange("BuyingPrice")}
                        placeholder="Buying Price"
                        />   
                    </View>

                    <Text style={{color:"#ffffff",fontSize:20}}>Quantity</Text>
                    <View style={styles.InputContainer}>
                        <TextInput 
                        style={{color:"white",fontSize:17}}
                        onChangeText={handleChange("Quantity")}
                        onBlur={()=>setFieldTouched("Quantity")} 
                        placeholder="Quantity"
                        />   
                    </View>
                    
                    <Text style={{color:"#ffffff",fontSize:20}}>Total</Text>

                    <View style={styles.InputContainer}>
                        <Text
                        style={{color:"white",fontSize:17}} 
                        >{Total}</Text>   
                    </View>
                    
            
                    
                    <View style={styles.btnContainer}>
                        <View style={styles.btn} >
                        <Button 
                        title='Submit' 
                        textcolor={{color:"#000000"}}
                        onPress={handleSubmit}
                        />
                        </View>
                        <View style={styles.btn} >
                         <Button 
                            title='Cancel' 
                            textcolor={{color:"#000000"}}
                            onPress={()=>setTotal(0)}
                        />
                        </View>
                    </View>
                </View>

                </>
            )}

             </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
        width:"40%",
        padding:15,
    },
    btnContainer:{
       flexDirection:"row"
    },
    InputContainer:{
        padding:10,
        margin:10,
        height:50,
        width:"95%",
        backgroundColor:"#2a3038",
        borderRadius:7
    },
    ScripName:{
        backgroundColor:"#2a3038"
    }
})