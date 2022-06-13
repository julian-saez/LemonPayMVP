import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        margin: 14,
        backgroundColor: "#ffffff",
        borderRadius: 25,
        elevation: 1,
        shadowColor: "#000000",
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
        color: "#667898",
        fontWeight: "500",
        marginTop: 20,
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
        color: "#171A23",
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    },
    typeCoin: {
        color: "#5F6F8D",
        fontSize: 15,
        fontFamily: "Nunito_500Medium",
    },
    amountContainer: {
        alignItems: "flex-end"
    },
    amount: {
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    },
    exchange: {
        color: "#5F6F8D",
        fontFamily: "Nunito_500Medium",
    },
})

export default styles;