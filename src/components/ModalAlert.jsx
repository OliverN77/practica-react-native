import { Modal, StyleSheet, Text, View } from 'react-native'
import BotonReutilizable from './BotonReutilizable'

export default function ModalAlert({ message, onClose, onConfirm }) {
    return (
        <Modal
            visible={Boolean(message)}
            transparent={true}
            animationType='fade'
        >
            <View style={styles.darkBackground}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalText}>{message}</Text>

                    {onConfirm ? (
                        <View style={styles.rowButton}>
                            <BotonReutilizable label={'Si'} onPress={onConfirm} styleProps={styles.confirmBtn} labelStyle={styles.confirmBtnText} />
                            <BotonReutilizable label={'No'} onPress={onClose} styleProps={styles.cancelBtn} labelStyle={styles.cancelBtnText} />
                        </View>
                    ) : (
                        <BotonReutilizable label={'Cerrar'} onPress={onClose} styleProps={styles.closeBtn} labelStyle={styles.closeBtnText} />
                    )}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    darkBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    rowButton: {
        flexDirection: 'row',
        gap: 10,
    },
    confirmBtn: {
        backgroundColor: '#2563EB',
        position: 'relative',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    confirmBtnText: {
        color: '#fff',
    },
    cancelBtn: {
        backgroundColor: '#E5E7EB',
        position: 'relative',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelBtnText: {
        color: '#000',
    },
    closeBtn: {
        backgroundColor: '#2563EB',
        position: 'relative',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeBtnText: {
        color: '#fff',
    },
})