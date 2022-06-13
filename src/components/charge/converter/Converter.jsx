import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, Modal, Pressable, TouchableHighlight } from 'react-native';
import { walletContext } from "../../../../contexts/Context";
import Styles from './styles.jsx';

const Converter = ({amount}) => {
    /** Si bien aca pongo otras monedas, esta aplicación solo convierte los pesos a bitcoin, aunque se podria crear un algoritmo para
     * identificar el valor de la moneda seleccionada y realizar la convertibilidad.
     */
    const coinsOptions = ["BTC", "SOL", "ETH", "DOT"];
    const [selected, setSelected] = useState("BTC")

    /** Este estado controla la ventana Modal */
    const [visible, setVisible] = useState(false)

    /** Estado global donde se almacenan los valores actuales de las monedas */
    const { wallet } = useContext(walletContext);

    /** Estado para guardar el monto pasado a Bitcoin */
    const [value, setValue] = useState(0);

    /** Paso los pesos a dolares y los divido por el valor de bitcoin para obtener la cantidad equivalente a pagar en ambas monedas */
    useEffect(() => {
        const toBitcoin = amount / 200 / wallet.values[0].bitcoin;
        setValue(toBitcoin.toFixed(8));
    }, [amount])

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Equivale a</Text>
            <View style={Styles.amountContainer}>
                <Text style={Styles.toBitcoin}>{value}</Text>

                {/* Boton con la moneda seleccionada */}

                <TouchableHighlight onPress={() => setVisible(!visible)}>
                    <View style={Styles.diviseContainer}>
                        <Text style={Styles.divise}>{selected}</Text>
                        <Image style={Styles.changeIcon} source={require("../../../../assets/change-black-arrows.png")} />

                        {/* Ventana modal que muestra las diferentes opciones de monedas para convertir */}

                        <Modal visible={visible} transparent={true} animationType="fade">
                            <View style={Styles.centered}>
                                <View style={Styles.modalContainer}>
                                    <Pressable onPress={() => setVisible(!visible)}>
                                        <View>
                                            {
                                                // Botones para seleccionar una moneda

                                                coinsOptions.map(coin => (
                                                    <TouchableHighlight underlayColor={"#E6E6E6"} style={Styles.coinOptions} key={coin} onPress={() => {
                                                        setSelected(coin);
                                                        setVisible(!visible);
                                                    }}>
                                                        {
                                                            coin === selected ? <Text style={[Styles.coin, Styles.selectedCoin]}>{coin}</Text> : <Text style={[Styles.coin, Styles.noSelectedCoin]}>{coin}</Text>
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
        </View>
    );
};

export default Converter;