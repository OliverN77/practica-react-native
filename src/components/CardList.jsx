import { Image, StyleSheet, Text, View } from 'react-native'
import BotonReutilizable from './BotonReutilizable'
import { usePathname } from 'expo-router'

export default function CardList({ item, onEdit, onDelete }) {

    const pathName = usePathname()
    const isActive = item.estado === true
    const isUsers = pathName === '/usuarios'

    return (
        <View style={[styles.card, isActive ? styles.accentActive : styles.accentInactive]}>
            {isUsers ? (
                <View>
                    <View style={styles.header}>
                        {item.avatar ? (
                            <Image style={styles.avatar} source={{ uri: item.avatar }} />
                        ) : (
                            <View style={[styles.avatar, styles.avatarPlaceholder]}>
                                <Text style={styles.avatarText}>
                                    {(item.nombre || '').slice(0, 2).toUpperCase()}
                                </Text>
                            </View>
                        )}

                        <View style={styles.headerText}>
                            <Text style={styles.title} numberOfLines={1}>{item.nombre}</Text>
                            <Text style={styles.subtitle} numberOfLines={1}>{item.correo}</Text>
                        </View>

                        <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
                            <View style={[styles.dot, isActive ? styles.dotActive : styles.dotInactive]} />
                            <Text style={[styles.badgeText, isActive ? styles.badgeTextActive : styles.badgeTextInactive]}>
                                {item.estado ? 'Activo' : 'Inactivo'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaLabel}>Rol</Text>
                        <View style={styles.chip}>
                            <Text style={styles.chipText}>{item.rol}</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.header}>
                        <View style={[styles.avatar, styles.companyIcon]}>
                            <Text style={styles.companyIconText}>🏢</Text>
                        </View>

                        <View style={styles.headerText}>
                            <Text style={styles.title} numberOfLines={1}>{item.empresa}</Text>
                            <Text style={styles.subtitle}>Cliente</Text>
                        </View>
                    </View>

                    {/* Meta */}
                    <View style={styles.metaColumn}>
                        <View style={styles.metaRow}>
                            <Text style={styles.metaLabel}>Teléfono</Text>
                            <Text style={styles.metaValue}>{item.telefono}</Text>
                        </View>
                        <View style={styles.metaRow}>
                            <Text style={styles.metaLabel}>Categoría</Text>
                            <View style={styles.chip}>
                                <Text style={styles.chipText}>{item.categoria}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
            <View style={styles.actionsButtons}>
                <BotonReutilizable styleProps={styles.editBtn} onPress={() => onEdit(item)} label="Editar" labelStyle={styles.editBtnText} />
                <BotonReutilizable styleProps={styles.deleteBtn} onPress={() => onDelete(item.id)} label="Eliminar" labelStyle={styles.deleteBtnText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        gap: 14,
        marginVertical: 14,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderLeftWidth: 4,
    },
    accentActive: {
        borderLeftColor: '#16A34A',
    },
    accentInactive: {
        borderLeftColor: '#DC2626',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    headerText: {
        flex: 1,
        gap: 2,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        color: '#0F172A',
    },
    subtitle: {
        fontSize: 13,
        color: '#64748B',
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    avatarPlaceholder: {
        backgroundColor: '#DBEAFE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#2563EB',
        fontSize: 17,
        fontWeight: '700',
    },
    companyIcon: {
        borderRadius: 14,
        backgroundColor: '#EFF6FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    companyIconText: {
        fontSize: 24,
    },

    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 999,
    },
    badgeActive: {
        backgroundColor: '#DCFCE7',
    },
    badgeInactive: {
        backgroundColor: '#FEE2E2',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
    dotActive: {
        backgroundColor: '#16A34A',
    },
    dotInactive: {
        backgroundColor: '#DC2626',
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
    },
    badgeTextActive: {
        color: '#166534',
    },
    badgeTextInactive: {
        color: '#991B1B',
    },
    metaColumn: {
        gap: 10,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    metaLabel: {
        fontSize: 13,
        color: '#64748B',
    },
    metaValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0F172A',
    },
    chip: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#F1F5F9',
    },
    chipText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#334155',
    },
    actionsButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    editBtn: {
        minWidth: 88,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#2563EB',
        position: 'relative',
    },
    editBtnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    deleteBtn: {
        minWidth: 88,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FEF2F2',
        borderWidth: 1,
        borderColor: '#FECACA',
        position: 'relative',
    },
    deleteBtnText: {
        color: '#DC2626',
        fontSize: 14,
        fontWeight: '600',
    },
})