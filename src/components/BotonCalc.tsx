import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: 'naranja' | 'grisC' | 'grisO';
    ancho?: boolean;
    accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({ texto, color = 'grisO', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity onPress={ () => accion(texto)}>
            <View style={[styles.boton, (color === 'grisC') ? styles.grisC : (color === 'naranja') ? styles.naranja : styles.boton, (ancho === true) ? styles.botonAncho : null]}>
                <Text style={[styles.botonTexto, (color === 'grisC') ? styles.letraBoton : styles.botonTexto]}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

