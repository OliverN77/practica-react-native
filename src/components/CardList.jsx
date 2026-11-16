import { Image, StyleSheet, Text, View } from 'react-native'
import BotonReutilizable from './BotonReutilizable'
import { usePathname } from 'expo-router'

export default function CardList({ item, onEdit, onDelete }) {

    const pathName = usePathname()

    return (
        <View style={styles.card}>
            <View style={styles.cardBody}>
                {pathName === '/usuarios' ? (
                    <View style={styles.cardInfo}>
                        {item.avatar ? (
                            <Image style={styles.avatar} source={{ uri: item.avatar }} />
                        ) : (
                            <View style={[styles.avatar, styles.avatarPlaceholder]}>
                                <Text style={styles.avatarText}>
                                    {(item.nombre || '').slice(0, 2).toUpperCase()}
                                </Text>
                            </View>
                        )}
                        <Text style={styles.textContent}>Nombre: {item.nombre}</Text>
                        <Text style={styles.textContent}>Correo: {item.correo}</Text>
                        <Text style={styles.textContent}>Rol: {item.rol}</Text>
                        <Text style={styles.textContent}>Estado: {item.estado}</Text>
                    </View>
                ) : (
                    <View style={styles.cardInfo}>
                        <Text style={styles.titleContent}>🏢 Cliente</Text>
                        <Text style={styles.textContent}>Empresa: {item.empresa}</Text>
                        <Text style={styles.textContent}>Teléfono: {item.telefono}</Text>
                        <Text style={styles.textContent}>Categoría: {item.categoria}</Text>
                    </View>
                )}
            </View>

            <View style={styles.actionsButtons}>
                <BotonReutilizable styleProps={styles.editBtn} onPress={() => onEdit(item)} label="Editar" labelStyle={styles.editBtnText} />
                <BotonReutilizable styleProps={styles.deleteBtn} onPress={() => onDelete(item.id)} label="Eliminar" labelStyle={styles.deleteBtnText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        gap: 8,
        marginBottom: 12,
    },
    cardBody: {
        gap: 4
    },
    cardInfo: {
        gap: 4
    },
    actionsButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
    editBtn: {
        backgroundColor: '#2563EB',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        position: 'relative',
    },
    editBtnText: {
        color: '#fff',
        fontSize: 14,
    },
    deleteBtn: {
        backgroundColor: '#DC2626',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        position: 'relative',
    },
    deleteBtnText: {
        color: '#fff',
        fontSize: 14,
    },
    titleContent: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    avatarPlaceholder: {
        backgroundColor: '#DBEAFE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#2563EB',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textContent: {
        fontSize: 14,
    },
})