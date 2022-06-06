import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 7,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 25,
    },
    item: {
        fontSize: 20,
        height: "auto",
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 17,
        color: "#F2F2F2",
        fontWeight: "500",
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 20
    },
    typeCoinContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    coinIcon: {
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: "#DBE7FF",
        marginRight: 14,
    },
    iconImg: {
        flexGrow: 1,
        borderRadius: 100
    },
    typeCoinAbr: {
        color: "#F2F2F2",
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    },
    typeCoin: {
        color: "#E0E0E0",
        fontSize: 15,
        fontFamily: "Nunito_500Medium",
    },
    amountContainer: {
        alignItems: "flex-end"
    },
    amount: {
        fontSize: 17,
        color: "#F2F2F2",
        fontFamily: "Nunito_700Bold",
    },
    exchange: {
        color: "#E0E0E0",
        fontFamily: "Nunito_500Medium",
    },
})

export default styles;