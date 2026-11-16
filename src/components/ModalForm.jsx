import { Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { usePathname } from 'expo-router'
import BotonReutilizable from './BotonReutilizable'


export default function ModalForm({
    openCloseModal,
    visibleModal,
    saveUsers,
    saveCliente,
    nombre = null,
    correo = null,
    rol = null,
    avatar = null,
    estado = false,
    setNombre = null,
    setCorreo = null,
    setRol = null,
    setAvatar = null,
    setEstado = null,
    empresa = null,
    telefono = null,
    categoria = null,
    setEmpresa = null,
    setTelefono = null,
    setCategoria = null
}) {

    const pathName = usePathname()

    return (
        <Modal
        visible={visibleModal}
        animationType='fade'
        onRequestClose={openCloseModal}
        >
            <View style={styles.modalFormHeader}>
                <Text style={styles.modalFormTitle}>Formulario de {pathName === '/usuarios' ? 'Usuario' : 'Cliente'}</Text>
                <BotonReutilizable label={'X'} onPress={openCloseModal} styleProps={styles.closeBtn}/>
            </View>
            {pathName === '/usuarios' ? (
                <View style={styles.modalFormBody}>
                    <Text>Nombre</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <Text>Correo</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={correo}
                        onChangeText={setCorreo}
                    />
                    <Text>Rol</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={rol}
                        onChangeText={setRol}
                    />
                    <Text>Avatar</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={avatar}
                        onChangeText={setAvatar}
                    />
                    <Text>Estado</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={estado == null ? '' : String(estado)}
                        onChangeText={setEstado}
                    />
                    <BotonReutilizable
                        label={'Guardar Usuario'}
                        onPress={saveUsers}
                        styleProps={styles.confirmBtn}
                        labelStyle={styles.confirmBtnText}
                    />
                </View>
            ) : (
                <View style={styles.modalFormBody}>
                    <Text>Empresa</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={empresa}
                        onChangeText={setEmpresa}
                    />
                    <Text>Teléfono</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={telefono}
                        onChangeText={setTelefono}
                    />
                    <Text>Categoría</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={categoria}
                        onChangeText={setCategoria}
                    />
                    <Text>Estado</Text>
                    <TextInput
                        style={styles.modalFormInput}
                        value={estado == null ? '' : String(estado)}
                        onChangeText={setEstado}
                    />
                    <BotonReutilizable
                        label={'Guardar Cliente'}
                        onPress={saveCliente}
                        styleProps={styles.confirmBtn}
                        labelStyle={styles.confirmBtnText}
                    />
                </View>
            )}
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalFormHeader: {
        backgroundColor: '#2563EB',
        padding: 16,
    },
    modalFormTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalFormBody: {
        padding: 16,
    },
    modalFormInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
    },
    confirmBtn: {
        backgroundColor: '#2563EB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        position: 'relative',
    },
    closeBtn: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    confirmBtnText: {
        color: '#fff',
        fontSize: 16,
    },
    closeBtnText: {
        color: '#000',
        fontSize: 16,
    },
})