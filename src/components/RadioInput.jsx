import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function RadioInput({ value, onChange }) {
    const opciones = [
        { texto: 'Activo', valor: true },
        { texto: 'Inactivo', valor: false }
    ];

    return (
        <View style={styles.container}>
            {opciones.map((opcion) => (
                <Pressable
                    key={opcion.texto}
                    style={styles.fila}
                    onPress={() => onChange(opcion.valor)}
                >
                    <View style={styles.circuloExterno}>
                        {value === opcion.valor && <View style={styles.circuloInterno} />}
                    </View>
                    <Text style={styles.texto}>{opcion.texto}</Text>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    circuloExterno: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circuloInterno: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#007AFF',
    },
    texto: {
        fontSize: 16,
        textTransform: 'capitalize'
    }
});