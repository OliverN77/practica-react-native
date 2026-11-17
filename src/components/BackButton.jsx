import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { alignLeftIcon } from './ui/icons'

export default function BackButton() {
    return (
        <Link href={'/'} asChild>
            <View style={styles.backButton}>
                <Text style={styles.backButtonText}>{alignLeftIcon()}</Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#2563EB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
    },
})