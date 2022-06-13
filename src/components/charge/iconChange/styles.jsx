import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%", 
        alignItems: "center", 
        zIndex: 1, 
        marginTop: 80,
    },
    iconContainer: {
        marginBottom: -50, 
        marginHorizontal: "auto", 
        width: 65, 
        height: 65, 
        borderRadius: 100, 
        zIndex: 3, 
        backgroundColor: "#f2f2f2", 
        justifyContent: "center", 
        alignItems: "center"
    },
    iconImg: {
        width: 30, 
        height: 30
    }
});

export default styles;