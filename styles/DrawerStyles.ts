import { StyleSheet } from "react-native";
import { scale } from "../base/utility/ScalingUtils"

export const drawerStyle = StyleSheet.create({

    headStyle: {
        paddingTop: scale(10),
        paddingBottom: scale(10),
        paddingLeft: scale(5),
    },
    imgLogo: {
        width: scale(150),
        height: scale(46),
        marginLeft: scale(10),
    },
    welcomeUser: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImg: {
        width: scale(55),
        height: scale(55),
        marginRight: scale(10),
    },
    wel: {
        fontSize: scale(9),
        color: 'rgba(255,255,255, 0.7)'
    },
    userName: {
        fontSize: scale(14),
        width: scale(150),
        color: 'rgba(255,255,255, 1)'
    },
    versionView: {
        position: 'absolute',
        bottom: scale(5),
        padding: scale(15),
        // marginTop: scale(15),
    },
    smallLogo: {
        width: scale(75),
        height: scale(23),
    },
    versionInfo: {
        fontSize: scale(8),
        color: 'rgba(255,255,255, 1)'
    }
});