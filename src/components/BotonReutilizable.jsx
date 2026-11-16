import { Pressable, StyleSheet, Text } from 'react-native'

export default function BotonReutilizable({ onPress, styleProps, label, labelStyle }) {
    return (
        <Pressable style={[styles.buttonDefault, styleProps]} onPress={onPress}>
            <Text style={[styles.labelDefault, labelStyle]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonDefault: {
        position: 'absolute'
    },
    labelDefault: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})