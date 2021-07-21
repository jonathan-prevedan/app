import React,  { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Button
} from "react-native";
import { FontAwesome5, Entypo } from '@expo/vector-icons'; 
import {  COLORS, SIZES, FONTS } from '../constants'

import { isIphoneX } from 'react-native-iphone-x-helper'

export default function EventInfo({route, navigation}) {

    const [event, setEvent] = useState(null);

    useEffect(() =>{
        let {item} = route.params;

        setEvent(item)
    })

    
    
    function renderHeader() {
        console.log(event)
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                   
                </TouchableOpacity>

                {/* event Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{event?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    
                </TouchableOpacity>
            </View>

           
        )
    }

    function rendereventinfo()
    {
        const [shouldShow, setShouldShow] = useState(true);
        return(
            <View
            style={{ alignItems: 'center'}}
            >
<View style={{ height: SIZES.height * 0.35 }}>
                                {/* Food Image */}
                                <Image
                                   source={{uri: 'https://previews.123rf.com/images/paprika/paprika1409/paprika140900097/32143221-fond-color%C3%A9-festive-avec-place-pour-le-texte.jpg'}}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width,
                                        height: "100%"
                                    }}
                                />

                                {/* Quantity */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: - 20,
                                        width: SIZES.width,
                                        height: 50,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    

                                    <View
                                        style={{
                                            width: 100,
                                            backgroundColor: COLORS.white,
                                            borderRadius: SIZES.radius,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{event?.name}</Text>
                                    </View>

                                    
                                </View>
                            </View>

                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15,
                                    paddingHorizontal: SIZES.padding * 2
                                }}
                            >
                                <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{event?.id_cat} </Text>
                                
                                <Text style={{ ...FONTS.body3 }}>Description de l'evenement : {"\n"}</Text>
                                <Text style={{ ...FONTS.body3 }}>{event?.description}{"\n"}</Text>
                                <Text style={{ ...FONTS.body3 }}>Date de début :{"\n"}</Text>
                                <Text style={{ ...FONTS.body3 }}>{event?.created_at}{"\n"}</Text>
                                <Text style={{ ...FONTS.body3 }}>Date de fin :{"\n"}</Text>
                                <Text style={{ ...FONTS.body3 }}>{event?.end_at}{"\n"}</Text>
                            </View>
                                <View
                                style={{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                                >
                                <View>
                                <FontAwesome5 name="check" size={24} color="green" 
                                onPress={() => setShouldShow(!shouldShow)}
                                />
                                </View>
                                <View>
                                {shouldShow ? (
                                <Entypo name="cross" size={32} color="red" />
                                ) : null}
                                </View>
                                </View>
                            
                                
            </View>
        )
    }

    
    return(
        <SafeAreaView style={styles.container}>
        {renderHeader()}
        {rendereventinfo()}
        
       
    </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})