import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        maxWidth: "100%",
        height: 64,
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        paddingVertical: 10,
        zIndex: 3
    },
    darkBackground: {
        backgroundColor: "#031F33",
    },
    lightBackground: {
        backgroundColor: "#FFFFFF",
    },
    darkText: {
        color: "#E0E0E0"
    },
    lightText: {
        color: "#566C93"
    },
    tabButton: {
        padding: 10,
        alignItems: "center"
    },
    text: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 12
    },
    selected: {
        color: "#467CDE"
    },
    tabIcon: {
        width: 30,
        height: 30,
    }
});

export default styles;