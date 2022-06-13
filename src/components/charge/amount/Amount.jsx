import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Modal, Pressable } from 'react-native';
import Styles from './styles.jsx';

const Amount = ({handleAmount}) => {
    /** Si bien aca pongo otras monedas, esta aplicación solo convierte los pesos a bitcoin, aunque se podria crear un algoritmo para
     * identificar el valor de la moneda seleccionada y realizar la convertibilidad.
     */
    const divisesOptions = ["ARS", "USD", "CAD", "£"];
    const [selected, setSelected] = useState("ARS")

    /** Este estado controla la ventana Modal */
    const [visible, setVisible] = useState(false)

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Ingrese el monto a cobrar</Text>
            <View style={Styles.chargeContainer}>
                <View style={Styles.inputContainer}>
                    <Text style={Styles.peso}>$</Text>

                    {/* Input para ingresar el monto */}
                    <TextInput 
                        style={Styles.input}
                        onChangeText={num => handleAmount(num)}
                        dataDetectorTypes={"none"}
                        defaultValue="0"
                        keyboardType={"numeric"}
                        maxLength={7}
                        autoFocus={false}
                    />
                </View>
                <TouchableHighlight onPress={() => setVisible(!visible)}>
                    <View style={Styles.diviseContainer}>
                        <Text style={Styles.divise}>{selected}</Text>
                        <Image style={Styles.changeIcon} source={require("../../../../assets/change-white-arrows.png")} />

                        {/* Ventana modal que muestra las diferentes opciones de monedas para convertir */}

                        <Modal visible={visible} transparent={true} animationType="fade">
                            <View style={Styles.centered}>
                                <View style={Styles.modalContainer}>
                                    <Pressable onPress={() => setVisible(!visible)}>
                                        <View>
                                            {
                                                // Botones para seleccionar una moneda

                                                divisesOptions.map(divise => (
                                                    <TouchableHighlight underlayColor={"#E6E6E6"} style={Styles.coinOptions} key={divise} onPress={() => {
                                                        setSelected(divise);
                                                        setVisible(!visible);
                                                    }}>
                                                        {
                                                            divise === selected ? <Text style={[Styles.coin, Styles.selectedCoin]}>{divise}</Text> : <Text style={[Styles.coin, Styles.noSelectedCoin]}>{divise}</Text>
                                                        }
                                                    </TouchableHighlight>
                                                ))
                                            }
                                        </View>
                                    </Pressable>
                                </View>
                            </View>

                        </Modal>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={Styles.container2}>
                <View style={Styles.line}></View>

                {/* En este botón el usuario puede especificar cada uno de sus productos/servicios si son más de uno */}
                <TouchableHighlight>
                    <Text style={Styles.specify}>Especificar consumos</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}



export default Amount;
