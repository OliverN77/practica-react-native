import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

export function alignLeftIcon() {
    return (
        <MaterialCommunityIcons name="align-horizontal-left" size={24} color="white"/>
    )
}

export function userIcon() {
    return (
        <Feather name="user" size={24} color="#2563EB" />
    )
}

export function clientIcon(){
    return (
        <Feather name="users" size={24} color="#16A34A" />
    )
}