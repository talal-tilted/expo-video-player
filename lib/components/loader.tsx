// @flow

import React, { memo } from 'react'
import {ActivityIndicator, View} from 'react-native'

import {PlaybackStates} from "../index";
import { LoaderProps as Props } from '../components/loader-interfaces'

import styles from '../components/loader-styles'



const Loader = memo(({ color, playbackState }: Props) => {
    if(playbackState === PlaybackStates.Buffering || playbackState === PlaybackStates.Loading){
        return (
            <View style={styles.loader}>
                <ActivityIndicator color={color} size={'large'} />
            </View>
        )
    }
    return null
})


export default Loader
