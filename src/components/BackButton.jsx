import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function BackButton() {
    return (
        <Link href={'/'} asChild>
            <View style={styles.backButton}>
                <Text style={styles.backButtonText}>Volver al inicio</Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#2563EB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
    },
})