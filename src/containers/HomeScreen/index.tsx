import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchBar } from '../../components/SearchBar'
import { Image, ScrollView, Text } from 'react-native'
import { TitlesDataT } from '../../types/TitleT'
import { getUpdates } from '../../api'
import { View } from 'react-native-animatable'
import { Pressable } from '@react-native-material/core'

export const HomeScreen = ({ navigation }) => {
    const [titles, setTitles] = useState<TitlesDataT | null>()

    useEffect(() => {
        getUpdates().then((resp) => setTitles(resp))
    }, [])

    return (
        <SafeAreaView style={{ paddingHorizontal: 10, backgroundColor: '#fff' }}>
            <SearchBar />

            <ScrollView>
                {titles &&
                    titles.list.map((item) => {
                        return (
                            <Pressable
                                style={{ padding: 10, marginTop: 15 }}
                                onPress={() => navigation.navigate('AnimePage', item.code)}
                                pressEffectColor="#ccc"
                            >
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <Image
                                        source={{
                                            uri: `https://anilibria.tv${item.posters.small.url}`,
                                        }}
                                        style={{ width: 100, height: 150, borderRadius: 10 }}
                                    />
                                    <View style={{ gap: 5 }}>
                                        <Text
                                            style={{ width: 270, fontWeight: '600', fontSize: 16 }}
                                        >
                                            {item.names.ru}
                                        </Text>
                                        <Text
                                            numberOfLines={3}
                                            style={{ width: 270, lineHeight: 22 }}
                                        >
                                            {item.description}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    })}
            </ScrollView>
        </SafeAreaView>
    )
}
