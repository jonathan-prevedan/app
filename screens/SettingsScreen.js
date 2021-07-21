import React, { useEffect, useState } from 'react';
import {ActivityIndicator,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import {  SIZES, COLORS, FONTS } from '../constants'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function SettingsScreen() {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Settings</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                       
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainContent(){
        const navigation = useNavigation();
        return(
            <View
                style={{
                        width: widthPercentageToDP("100%"),
                        height : heightPercentageToDP("80%"),
                        borderRadius: SIZES.radius,
                        justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flexDirection:'row',
                                                justifyContent: 'space-around'
                                                
                                            }}>
                                                <Entypo name="calendar" size={80} color="#336699" 
                                                onPress={()=> navigation.navigate('realhome')}
                                                />
                                                <FontAwesome name="user" size={80} color="#336699" 
                                                onPress={()=> navigation.navigate('profile')}
                                                />
                                                
                                            </View>
                                            <View style={{marginTop: "25%", alignItems: 'center'}}>
                                                <Text style={{...FONTS.body2, color:"#336699"}}>Mentions légales {"\n"}</Text>
                                                <Text style={{...FONTS.body2, color:"#336699"}}>Deconnexion</Text>
                                            </View>
                                            
                                           
            </View>
        )
    }
    return(
<SafeAreaView style={styles.container}>
  
  {renderHeader()}
  {renderMainContent()}

</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})