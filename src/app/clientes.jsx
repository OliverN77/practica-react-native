import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import BotonReutilizable from '../components/BotonReutilizable'
import { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalAlert from '../components/ModalAlert'
import ModalForm from '../components/ModalForm'
import BackButton from '../components/BackButton'

export default function clientes() {


    const [empresa, setEmpresa] = useState('')
    const [telefono, setTelefono] = useState('')
    const [categoria, setCategoria] = useState('')
    const [estado, setEstado] = useState(null)
    const [visibleModal, setVisibleModal] = useState(false)

    const [messageModal, setMessageModal] = useState('')
    const [idDelete, setIdDelete] = useState(null)
    const [idEditing, setIdEditing] = useState(null)

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        loadClientes()
    }, [])

    const openCloseModal = () => {
        setVisibleModal(!visibleModal)
    }

    const loadClientes = async () => {
        const data = await AsyncStorage.getItem('@dataClientes')
        if (data) setClientes(JSON.parse(data))
    }

    const prepareEdit = (cliente) => {
        setIdEditing(cliente.id)
        setEmpresa(cliente.empresa)
        setTelefono(cliente.telefono)
        setCategoria(cliente.categoria)
        setEstado(cliente.estado)
        openCloseModal()
    }

    const requestDeletionConfirmation = (id) => {
        setIdDelete(id)
        setMessageModal('¿Estas seguro de eliminar este cliente?')
    }

    const confrimDelete = async () => {
        const newList = clientes.filter((c) => c.id !== idDelete)

        await AsyncStorage.setItem('@dataClientes', JSON.stringify(newList))
        setClientes(newList)

        if (idEditing === idDelete) {
            setIdEditing(null)
            setEmpresa('')
            setTelefono('')
            setCategoria('')
            setEstado(null)
        }

        setIdDelete(null)
    }

    const saveCliente = async () => {
        let newList = []

        if (idEditing) {
            newList = clientes.map((c) =>
                c.id === idEditing ? { ...c, empresa: empresa, telefono: telefono, categoria: categoria, estado: estado } : c
            )
            setIdEditing(null)
        } else {
            const newCliente = {
                id: Date.now().toString(),
                empresa,
                telefono,
                categoria,
                estado
            }
            newList = [...clientes, newCliente]
        }

        await AsyncStorage.setItem('@dataClientes', JSON.stringify(newList))
        setClientes(newList)

        setEmpresa('')
        setTelefono('')
        setCategoria('')
        setEstado('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Text style={styles.title}>Gestion de Clientes</Text>
                <Text style={styles.subtitle}>Administra la informacion de los clientes.</Text>
                <BotonReutilizable label={'+ Agregar'} styleProps={styles.addBtn} onPress={openCloseModal} />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Buscar cliente...'
                    placeholderTextColor={'#000a'}
                />
            </View>

            <View style={styles.clienteList}>
                <Text style={styles.title}>Lista de clientes</Text>
                <FlatList
                    data={clientes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardList item={item} onEdit={prepareEdit} onDelete={requestDeletionConfirmation} />
                    )}
                />

                <ModalAlert
                    message={messageModal}
                    onConfirm={idDelete ? confrimDelete : false}
                    onClose={() => {
                        setMessageModal('')
                        setIdDelete(null)
                    }}
                />

                <ModalForm
                    empresa={empresa}
                    setEmpresa={setEmpresa}
                    telefono={telefono}
                    setTelefono={setTelefono}
                    categoria={categoria}
                    setCategoria={setCategoria}
                    estado={estado}
                    setEstado={setEstado}
                    visibleModal={visibleModal}
                    openCloseModal={openCloseModal}
                    saveCliente={saveCliente}
                />
            </View>
            <BackButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    headerContent: {
        marginTop: 20,
        flexDirection: 'column',
    },
    addBtn: {
        position: 'absolute',
        right: 10,
        backgroundColor: '#2563EB',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
        marginLeft: 20,
        color: '#888',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    clienteList: {
        flex: 1,
        paddingHorizontal: 20,
    },
})