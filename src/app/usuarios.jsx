import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import BotonReutilizable from '../components/BotonReutilizable'
import { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalAlert from '../components/ModalAlert'
import ModalForm from '../components/ModalForm'

export default function usuarios() {

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [rol, setRol] = useState('')
  const [avatar, setAvatar] = useState('')
  const [estado, setEstado] = useState(null)
  const [tipoDocumento, setTipoDocumento] = useState('')
  const [numeroDocumento, setNumeroDocumento] = useState('')

  const [visibleModal, setVisibleModal] = useState(false)

  const [messageModal, setMessageModal] = useState('')
  const [idDelete, setIdDelete] = useState(null)
  const [idEditing, setIdEditing] = useState(null)

  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const openCloseModal = () => {
    setVisibleModal(!visibleModal)
  }

  const loadUsers = async () => {
    const data = await AsyncStorage.getItem('@dataUsers')
    if (data) setUsers(JSON.parse(data))
  }

  const prepareEdit = (user) => {
    setIdEditing(user.id)
    setNombre(user.nombre)
    setCorreo(user.correo)
    setTipoDocumento(user.tipoDocumento)
    setNumeroDocumento(user.numeroDocumento)
    setRol(user.rol)
    setAvatar(user.avatar)
    setEstado(user.estado)
    openCloseModal()
  }

  const requestDeletionConfirmation = (id) => {
    setIdDelete(id)
    setMessageModal('¿Estas seguro de eliminar este usuario?')
  }

  const confrimDelete = async () => {
    const newList = users.filter((u) => u.id !== idDelete)

    await AsyncStorage.setItem('@dataUsers', JSON.stringify(newList))
    setUsers(newList)

    if (idEditing === idDelete) {
      setIdEditing(null)
      setNombre('')
      setCorreo('')
      setTipoDocumento('')
      setNumeroDocumento('')
      setRol('')
      setAvatar('')
      setEstado(null)
    }

    setIdDelete(null)
    setMessageModal('Usuario eliminado correctamente')
  }

  const saveUsers = async () => {
    let newList = []

    if (idEditing) {
      newList = users.map((u) =>
        u.id === idEditing ? { ...u, nombre: nombre, correo: correo, rol: rol, avatar: avatar, estado: estado, tipoDocumento: tipoDocumento, numeroDocumento: numeroDocumento } : u
      );
      setIdEditing(null)
    } else {
      const newUser = {
        id: Date.now().toString(),
        nombre,
        correo,
        tipoDocumento,
        numeroDocumento,
        rol,
        avatar,
        estado
      };
      newList = [...users, newUser]
    }

    await AsyncStorage.setItem('@dataUsers', JSON.stringify(newList))
    setUsers(newList)
    setNombre('')
    setCorreo('')
    setTipoDocumento('')
    setNumeroDocumento('')
    setRol('')
    setAvatar('')
    setEstado(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Usuarios</Text>
        <Text style={styles.subtitle}>Administra los usuarios</Text>
        <BotonReutilizable label={'+ Agregar'} styleProps={styles.btnAgregar} onPress={openCloseModal} />
        <TextInput placeholder="Buscar usuarios..." style={styles.searchInput} placeholderTextColor={'#000a'} />
      </View>

      <View style={styles.userList}>
        <Text style={styles.title}>Lista de usuarios</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardList
              item={item}
              onEdit={prepareEdit}
              onDelete={requestDeletionConfirmation}
            />

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
          nombre={nombre}
          correo={correo}
          rol={rol}
          avatar={avatar}
          estado={estado}
          tipoDocumento={tipoDocumento}
          numeroDocumento={numeroDocumento}
          setNombre={setNombre}
          setCorreo={setCorreo}
          setRol={setRol}
          setAvatar={setAvatar}
          setEstado={setEstado}
          setTipoDocumento={setTipoDocumento}
          setNumeroDocumento={setNumeroDocumento}
          visibleModal={visibleModal}
          openCloseModal={openCloseModal}
          saveUsers={saveUsers}
        />
      </View>
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
  btnAgregar: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  userList: {
    flex: 1,
    paddingHorizontal: 20,
  },

})