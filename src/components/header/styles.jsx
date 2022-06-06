import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const max_width_tag = '40%';
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 25,
        marginRight: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tagContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        marginLeft: 14,
        maxWidth: max_width_tag,
        backgroundColor: '#ffffff',
        padding: 2,
        elevation: 1,
        shadowColor: '#000000'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 8,
    },
    tag: {
        color: '#667898',
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
        marginRight: 20,
    },
    buttonContainer: {
        height: 50,
    },
    lemonPayContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 6
    },
    lemonPayButton: {
        fontSize: 15,
        marginRight: 8,
        color: "#467CDE",
        fontFamily: "Nunito_600SemiBold"
    },
    lemonPayIcon: {
        width: 40,
        height: 40
    }
})

export default styles;