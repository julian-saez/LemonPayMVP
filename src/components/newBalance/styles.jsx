import { StyleSheet } from "react-native";

const line_width = '100%';
const fithty_width = '50%';
const container_width = '85%';
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        borderRadius: 25,
        alignItems: "center",
        marginTop: 14,
        marginLeft: 14,
        marginRight: 14,
        paddingBottom: 30,
    },
    sectionTitle: {
        color: '#F2F2F2',
        fontFamily: "Nunito_600SemiBold",
        fontSize: 16,
        marginTop: 24,
    },
    money: {
        marginTop: 17,
        fontSize: 26,
        fontFamily: "Nunito_700Bold",
        color: '#F2F2F2',
    },
    badgeText: {
        fontSize: 22,
    },
    balanceButtons: {
        width: fithty_width,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#86FF2E",
        paddingTop: 14,
        paddingBottom: 14,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 15,
        marginLeft: 4,
        marginRight: 4,
    },
    textBalanceButtons: {
        fontFamily: "Nunito_700Bold",
        fontSize: 16
    },
    balanceButtonsContainer: {
        flexDirection: "row",
        marginTop: 24,
        marginRight: 14,
        marginLeft: 14
    },
    buttonsText: {
        color: "#F2F2F2",
        fontFamily: "Nunito_500Medium",
        marginTop: 5
    },
    actionsButtonsContainer: {
        marginTop: 16,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    actionsButtonsBox: {
        justifyContent: "center",
        alignItems:"center",
        padding:10,
    },
    actionsIcons: {
        width: 20,
        height: 20,
    },
    actionsIconsContainer: {
        backgroundColor: "#124660",
        borderRadius: 100,
        padding: 16,
    },
});

export default styles;