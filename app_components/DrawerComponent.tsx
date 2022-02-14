import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import { gradOrgBottom, gradOrgTop, whiteColor } from '../base/utility/ColorUtils';
import { HomeScreenTitle, logoutTabTitle } from '../base/utility/MessagesUtils';
import { scale } from '../base/utility/ScalingUtils';
import Dashboard from '../screen/Dashboard';
import { Logout } from '../screen/Logout';
import { drawerStyle } from '../styles/DrawerStyles';
import { tabNavigatorStyles } from '../styles/TabNavigatorStyles';

const Drawer = createDrawerNavigator();

export const CustomDrawerContentComponent: any = (props: any) => {
    const userInfo: any = {}
    return (
        <ScrollView
            style={{
                backgroundColor: '#083678',
                flex: 1,
            }}
            contentContainerStyle={{
                flexGrow: 1,
            }}>
            <View style={{
                flex: 1,
            }}>
                <LinearGradient
                    colors={[gradOrgTop, gradOrgBottom]}
                    style={[drawerStyle.headStyle]}>
                    <View style={[drawerStyle.welcomeUser]}>
                        <Image
                            style={[drawerStyle.userImg]}
                            source={require("../img/user.png")}
                        />
                        <View>
                            <Text style={[drawerStyle.wel]}>Welcome</Text>
                            <Text
                                style={[drawerStyle.userName]}
                                numberOfLines={2}
                            >{userInfo && userInfo.name}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <View style={[drawerStyle.versionView]}>
                    <Text style={[drawerStyle.versionInfo]}>Version: 1.0.1</Text>
                </View>
            </View>
        </ScrollView>
    )
};

export default function appDrawer() {

    return (
        <Drawer.Navigator initialRouteName="DashboardScreen"
            drawerContent={CustomDrawerContentComponent}
            drawerContentOptions={{
                activeTintColor: whiteColor,
                inactiveTintColor: whiteColor,
                labelStyle: {
                    fontSize: scale(10),
                    textTransform: 'uppercase',
                    fontWeight: 'normal',
                },
                itemStyle: {
                    paddingTop: scale(6),
                    paddingBottom: scale(6),
                    marginBottom: scale(3),
                    backgroundColor: 'rgba(50, 50, 50, 0.2)'
                },
            }}
        >
            <Drawer.Screen name="DashboardScreen"
                options={{
                    title: HomeScreenTitle,
                    drawerIcon: ({ tintColor }: any) => (
                        <Image
                            source={require("../img/dashboard-icon.png")}
                            style={[tabNavigatorStyles.tabIconSize]}
                        />
                    ),
                }}
                component={Dashboard} />
            <Drawer.Screen name="Logout"
                options={{
                    title: logoutTabTitle,
                    drawerIcon: ({ tintColor }: any) => (
                        <Image
                            source={require("../img/logout-icon.png")}
                            style={[tabNavigatorStyles.tabIconSize]}
                        />
                    ),
                }}

                component={Logout} />
        </Drawer.Navigator>
    );
}


