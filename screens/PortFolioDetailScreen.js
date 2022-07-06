import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Card from '../Component/Card'

const data=[
    {
    Scrip:"ABC",
    Amount:1000,
    InvestedOn:"20/11/22"
    },
    {
    Scrip:"ABC",
    Amount:1000,
    InvestedOn:"20/11/22"
    },
    {
    Scrip:"ABC",
    Amount:1000,
    InvestedOn:"20/11/22"
    },
    {
    Scrip:"ABC",
    Amount:1000,
    InvestedOn:"20/11/22"
    },
]
export default function PortFolioDetailScreen() {
  return (
   <View style={{backgroundColor:"black",flex:1}}>
      <Text style={{color:"white",fontSize:22,top:40,padding:10}}>Portfolio Details</Text>
    <View style={{backgroundColor:"#191c24",height:"85%",top:40,borderRadius:10}}>
      
        {/* <View style={{flexDirection:"row",margin:10,top:15}}>
            <Text style={{color:"white",marginLeft:7}}>Logo</Text>
            <Text style={{color:"white",marginLeft:20}}>ScripName</Text>
            <Text style={{color:"white",marginLeft:20}}>AmmountInvested</Text>
            <Text style={{color:"white",marginLeft:20}}>InvestedOn</Text>

           
        </View> */}
         <View style={{flexDirection:"row",marginLeft:50}}>
        
        <Text style={{color:"#525777",fontWeight:"700",marginLeft:25}}>Scrip</Text>
        <Text style={{color:"#525777",fontWeight:"700",marginLeft:80}}>Amount</Text>
        <Text style={{color:"#525777",fontWeight:"700",marginLeft:60}}>InvestedOn</Text>
    </View>
        <ScrollView style={{height:200}}>
          
          {
              data.map((item)=>{
                  return(
                    <Card Children={item}/>
                  )
              })
          }
     
      </ScrollView>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({})