import { Image, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { clientIcon, userIcon } from '../components/ui/icons'


export default function Main() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Panel Principal</Text>
            <Text style={styles.subtitle}>Seleccionar un modulo que deseas administrar</Text>
            <View style={styles.userContainer}>
                <View style={styles.userIcon}>
                    <View style={styles.userIconImage}>
                        {userIcon()}
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.text}>Gestion de Usuarios</Text>
                        <Text style={styles.subtitle}>Administra los usuarios registrados.</Text>
                    </View>
                </View>
                <Link href="/usuarios" asChild>
                    <View style={styles.userLink}>
                        <Text style={styles.linkText}>Ir a Usuarios</Text>
                    </View>
                </Link>
            </View>
            <View style={styles.clienteContainer}>
                <View style={styles.clienteIcon}>
                    <View style={styles.clienteIconImage}>
                        {clientIcon()}
                    </View>
                    <View style={styles.clienteInfo}>
                        <Text style={styles.text}>Gestion de Clientes</Text>
                        <Text style={styles.subtitle}>Administra la informacion de los clientes.</Text>
                    </View>
                </View>
                <Link href="/clientes" asChild>
                    <View style={styles.clienteLink}>
                        <Text style={styles.linkText}>Ir a Clientes</Text>
                    </View>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
        color: '#777'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    userInfo: {
        flexDirection: 'column',
    },
    userIcon: {
        flexDirection: 'row',
        gap: 10,
    },
    userLink: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    userIconImage: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DBEAFE',
        borderRadius: 10,
    },
    clienteContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    clienteInfo: {
        flexDirection: 'column',
    },
    clienteIcon: {
        flexDirection: 'row',
        gap: 10,
    },
    clienteLink: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    clienteIconImage: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCFCE7',
        borderRadius: 10,
    },
    linkText: {
        color: 'white',
        fontWeight: 'bold',
    }
})