import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 14,
        backgroundColor: '#193142',
        borderRadius: 25,
        marginBottom: 70,
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
        color: "#A8BEE4",
        fontFamily: "Nunito_600SemiBold",
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
        fontSize: 16,
        fontFamily: "Nunito_600SemiBold",
    },
    typeCoin: {
        color: "#A8BEE4",
        fontSize: 15,
        fontFamily: "Nunito_500Medium",
    },
    amountContainer: {
        alignItems: "flex-end"
    },
    amount: {
        fontSize: 12,
        fontFamily: "Nunito_700Bold",
        color: "#F2F2F2"
    },
    exchange: {
        color: "#E0E0E0",
        fontFamily: "Nunito_500Medium",
    },

})

export default styles;