import { StyleSheet } from 'react-native';

const line_width = '100%';
const container_width = '85%';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: 'auto',
        borderRadius: 25,
        alignItems: "center",
        elevation: 1,
        shadowColor: "#000000",
        margin: 14,
        paddingBottom: 30,
    },
    line: {
        marginTop: 14,
        height: 1,
        width: line_width,
        backgroundColor: "#D7DCE4"
    },
    sectionTitle: {
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        marginTop: 24,
        color: "#667898",
    },
    money: {
        marginTop: 17,
        fontSize: 26,
        fontFamily: "Nunito_700Bold",
    },
    badgeText: {
        fontSize: 22,
    },
    buttonsContainer: {
        marginTop: 16,
        width: container_width,
        justifyContent: "space-between",
        flexDirection: "row"
    },  
    iconContainer: {
        backgroundColor: "#467CDE",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: 45,
        height: 45,
        borderRadius: 15,
    },
    buttonsIcons: {
        height: 20,
        width: 20,
    },
    buttonsText: {
        color: "#467CDE",
        fontFamily: "Nunito_700Bold",
        marginTop: 4
    },
    buttons: {
        justifyContent: "center",
        alignItems:"center"
    }
});

export default styles;