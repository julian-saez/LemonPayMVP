import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#031F33",
        flexGrow: 1,
        position: "relative"
    },
    centered: {
        marginTop: "10%",
        alignItems: "center"
    },
    qr: {
        width: 250,
        height: 250
    },
    line: {
        marginVertical: 10,
        backgroundColor: "#9B9B9B",
        height: 0.7
    },
    alternativesContainer: {
        marginTop: 30,
        marginHorizontal: 14
    },
    titleAlternatives:{
        fontFamily: "Nunito_700Bold",
        fontSize: 20,
        marginTop: 25,
        color: "#f2f2f2"
    },
    textDescripting: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        color: "#f2f2f2",
        marginVertical: 10
    },
    code: {
        fontFamily: "Nunito_700Bold",
        color: "#f2f2f2",
        fontSize: 20
    },
    linkBar: {
        marginTop: 10,
        backgroundColor: "#11354F",
        padding: 15,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    linkText: {
        color: "#f2f2f2",
        fontFamily: "Nunito_500Medium"
    },
    copyIcon: {
        width: 20,
        height: 20
    }
});

export default styles;