import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        color: "#f2f2f2",
        marginHorizontal: "19%",
        marginTop: "25%",
        alignItems: "center",
        elevation: 3,
    },
    title: {
        color: "#031F33", 
        fontSize: 16, 
        fontFamily: "Nunito_500Medium"
    },
    amountContainer: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    toBitcoin: {
        color: "#031F33", 
        fontSize: 30, 
        fontFamily: "Nunito_700Bold"
    },
    divise: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 20,
        marginLeft: 10,
        marginRight: 5
    },
    diviseContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center"
    },
    changeIcon: {
        width: 20,
        height: 20
    },
    centered: {
        flexGrow: 1,    
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    modalContainer: { 
        marginLeft: 180,
        marginTop: 30,
        backgroundColor: "#FFFFFF", 
        borderRadius: 16,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: "#000000"
    },
    coinOptions: {
        marginVertical: 10,
        marginHorizontal: 40
    },
    coin: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 20
    },
    selectedCoin: {
        color: "#467CDE"
    },
    noSelectedCoin: {
        color: "#000000"
    }
});

export default styles;