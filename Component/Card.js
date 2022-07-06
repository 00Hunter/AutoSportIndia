import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 


export default function Card({Children}) {
    console.log(Children)
  return (
    <View style={{flexDirection:"row",margin:10,alignItems:"center",borderWidth:1,borderRadius:10}}>
        <Ionicons name="person-circle-outline" size={50} color="black" />
        <Text style={{color:"#525777",fontWeight:"700",left:25}}>{Children.Scrip}</Text>
        <Text style={{color:"#525777",fontWeight:"700",left:100}}>{Children.Amount}</Text>
        <Text style={{color:"#525777",fontWeight:"700",left:180}}>{Children.InvestedOn}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})