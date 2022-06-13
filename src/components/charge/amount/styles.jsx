import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: "19%",
        marginTop: 40,
    },
    title: {
        color: "#F2F2F2",
        fontFamily: "Nunito_500Medium",
        fontSize: 16,
    },
    chargeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        width: "auto",
        minWidth: "65%",
        maxWidth: "80%",
        color: "#F2F2F2",
        fontFamily: "Nunito_700Bold",
        fontSize: 30,
        marginLeft: 10,
        marginVertical: 18
    },
    container2: {
        alignItems: "flex-end"
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#F2F2F2",
        zIndex: 2
    },
    peso: {
        fontSize: 17,
        color: "#F2F2F2"
    },
    specify: {
        marginTop: 12,
        color: "#F2F2F2",
        fontFamily: "Nunito_600SemiBold",
        fontSize: 14
    },
    diviseContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    divise: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 20,
        color: "#f2f2f2",
        marginRight: 5
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
        marginBottom: 180,
        marginRight: 35,
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