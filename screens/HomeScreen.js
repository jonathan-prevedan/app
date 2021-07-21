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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  SIZES, COLORS, FONTS } from '../constants'
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './SettingsScreen';

export default function HomeScreen  ()  {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getEvent = async () => {
      try {
        const response = await fetch('https://jonathan-prevedan.students-laplateforme.io/API/public/events');
        const json = await response.json();
        setData(json.data);
        console.log(setData)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

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
                        <Text style={{ ...FONTS.h3 }}>LaPlateforme.io</Text>
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


    function renderEventList() {
        const navigation = useNavigation();
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("eventinfo", {
                    item
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={{uri: 'https://previews.123rf.com/images/paprika/paprika1409/paprika140900097/32143221-fond-color%C3%A9-festive-avec-place-pour-le-texte.jpg'}}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.created_at}</Text>
                    </View>
                </View>

                {/* Events infos*/}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

               
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}></Text>
                
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
            </View>
        )
    }

    useEffect(() => {
      getEvent();
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
  
        {renderHeader()}
        {renderEventList()}
    </SafeAreaView>
    );
  };
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