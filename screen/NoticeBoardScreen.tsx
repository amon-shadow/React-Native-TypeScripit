import React from 'react';
import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { blackColor, whiteColor } from '../base/utility/ColorUtils';
import FlatListView from '../component/FlatLIstView';


const NoticeBoardScreen = () => {
    const ListItem = (props: any) => {
        const { item } = props;
        return (
            <Card
                containerStyle={{
                    borderRadius: 10,
                    backgroundColor: whiteColor,
                    borderColor: blackColor
                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            flex: .2,
                        }}
                    >
                        <Image
                            style={{
                                height: 60,
                                width: 60
                            }}
                            resizeMode="cover"
                            source={require('../img/user.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: .8
                        }}
                    >
                        <Text style={{
                            marginBottom: 5,
                            fontWeight: '700'
                        }}>{'Posted by: Admin 21/01/2022'}</Text>
                        <Text style={{
                            marginBottom: 5
                        }}>{'Test Data details'}</Text>
                    </View>

                </View>
            </Card>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                padding: 10
            }}
        >
            <FlatListView
                data={['q', 'b',]}
                renderItem={ListItem}
                keyExtractor="label"
            />
        </View>
    );
};


export default NoticeBoardScreen;
