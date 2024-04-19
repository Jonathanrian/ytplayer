import { useCallback, useState } from "react";

import { View, ActivityIndicator, useWindowDimensions, Alert } from "react-native";

import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";

import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from "./styles";

import * as ScreenOrientation from 'expo-screen-orientation';



export function Home(){

    const [ videoReady, setVideoReady ] = useState(false);
    const { width } = useWindowDimensions();

    const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

    const onFullScreenChange = useCallback((isFullScreen: boolean) => {
        console.log(isFullScreen);
        if(isFullScreen){
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }else{
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }

    }, []);

    const onChangeState = useCallback((state: string) => {
        if(state === PLAYER_STATES.ENDED){
            Alert.alert("E ai, meus queridos", "Não deixe de curtir o video!");
        }
    }, []);

    return (
        <View style={styles.container}> 
            <View style={styles.player}>
                <YoutubeIframe 
                    videoId="mxiRCcnsKDw"
                    height={VIDEO_HEIGHT}
                    width={videoReady ? VIDEO_WIDTH : 0}
                    onReady={() => setVideoReady(true)}
                    onFullScreenChange={onFullScreenChange}
                    onChangeState={onChangeState}
                />

                {!videoReady && <ActivityIndicator color="red" />}
            </View>

        </View>
    );
}