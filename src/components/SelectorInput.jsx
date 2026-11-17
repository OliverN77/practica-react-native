import { StyleSheet, Text, View } from 'react-native'
import { Picker } from 'react-native-web'

export default function SelectorInput({ value, onChange }) {
    return (
        <Picker
            style={styles.picker}
            selectedValue={value}
            onValueChange={(itemValue) => onChange(itemValue)}
        >

            <Picker.Item label="Selecciona un tipo de documento..." value="" />
            <Picker.Item label="Cédula de ciudadanía" value="CC" />
            <Picker.Item label="Cédula de extranjería" value="CE" />
            <Picker.Item label="Tarjeta de identidad" value="TI" />
        </Picker>
    )
}

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
})