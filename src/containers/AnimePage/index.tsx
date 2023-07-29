import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { getTitle } from '../../api'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TitleT } from '../../types/TitleT'
import { Stack, Button, Pressable, ActivityIndicator } from '@react-native-material/core'
import Markdown from 'react-native-markdown-display'

export const AnimePage = ({ route }) => {
    const [titleInfo, setTitleInfo] = useState<TitleT | null>(null)
    useEffect(() => {
        console.log(route.params)
        getTitle(route.params).then((resp) => setTitleInfo(resp))
    }, [])

    if (titleInfo) {
        return (
            <SafeAreaView style={{ backgroundColor: '#fff' }}>
                <ScrollView>
                    <View
                        style={{
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <Image
                            source={{ uri: `https://anilibria.tv/${titleInfo.posters.small.url}` }}
                            style={{ width: 200, height: 300 }}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: 28,
                                paddingHorizontal: 10,
                            }}
                        >
                            {titleInfo.names.ru}
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '400',
                                paddingHorizontal: 10,
                                color: '#858585',
                            }}
                        >
                            {titleInfo.names.en}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 10,
                                justifyContent: 'center',
                            }}
                        >
                            {titleInfo.genres.map((item) => {
                                return (
                                    <View
                                        style={{
                                            backgroundColor: '#000',
                                            padding: 5,
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Pressable>
                                            <Text style={{ color: '#fff' }}>{item}</Text>
                                        </Pressable>
                                    </View>
                                )
                            })}
                        </View>
                        <Button title="Начать просмотр" style={{ width: '90%' }} />
                    </View>

                    <View
                        style={{
                            marginTop: 15,
                            marginHorizontal: 20,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            padding: 10,
                            borderRadius: 5,
                            gap: 10,
                        }}
                    >
                        <View>
                            <Text style={{ color: '#8a8a8a' }}>Формат</Text>
                            <Text>{titleInfo.type.string}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8a8a8a' }}>Дата выхода</Text>
                            <Text>{titleInfo.season.year}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8a8a8a' }}>Озвучка</Text>
                            <Text>AniLibria</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8a8a8a' }}>Кол-во эпизодов</Text>
                            <Text>{titleInfo.player.episodes.last} эп.</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8a8a8a' }}>Статус</Text>
                            <Text>{titleInfo.status.string}</Text>
                        </View>
                    </View>
                    {/* <Text style={{ paddingHorizontal: 20, lineHeight: 20, marginTop: 15 }}>

                    </Text> */}
                    <Markdown>{titleInfo.description}</Markdown>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        )
    }
}
