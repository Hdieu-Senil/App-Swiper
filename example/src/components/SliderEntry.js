import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from 'example/src/styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        // console.log(this.props);

        // const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        // return (
            
        // );
    }

    render() {
        const { data: { title, subtitle, illustration }, parallaxProps, even } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked '${title}'`); }}
            >
                <View style={styles.imageContainer}>
                    <ParallaxImage
                        source={{ uri: illustration }}
                        containerStyle={[styles.imageContainer]}
                        style={styles.image}
                        parallaxFactor={0.35}
                        showSpinner={true}
                        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                        {...parallaxProps}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
