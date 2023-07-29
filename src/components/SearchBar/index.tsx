import { TextInput, StyleSheet, Text, View } from 'react-native'
import { Surface } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

export const SearchBar = (): JSX.Element => {
    return (
        <View style={styles.search_container}>
            <Surface style={styles.search} elevation={2}>
                <Icon name="search" size={20} />
                <TextInput placeholder="Поиск по названию" style={styles.searchInput} />
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({
    search_container: {},
    search: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    searchInput: {
        fontSize: 16,
    },
})
