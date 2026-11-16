import { Slot, usePathname } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import NovaX from '../../assets/images/NovaX.png'

import { alignLeftIcon } from "../components/ui/icons";

export default function TabLayout() {

  const pathName = usePathname()

  const texto = {
    '/': 'Inicio',
    '/usuarios': 'Usuarios',
    '/clientes': 'Clientes'

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={NovaX}
          style={styles.headerLogo}
        />
        <View style={styles.headerTexts}>
          <Text style={styles.title}>{texto[pathName]}</Text>
          <Text style={styles.subtitle}>NovaX S.A.S</Text>
        </View>
        <View style={styles.content}>
          {alignLeftIcon()}
        </View>
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#2563EB',
  },
  headerLogo: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  headerTexts: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
  },
  content: {
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#fff',
  },
});