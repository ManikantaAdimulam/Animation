import React, { Component } from "react";
import { StyleSheet, PanResponder, Animated } from "react-native";

/**
 * PanResponder Demo
 *
 * @export class
 * @class PanHandler
 * @extends {Component}
 */
export default class PanHandler extends Component {
  /**
   * Creates an instance of PanHandler.
   * @memberof PanHandler
   */
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  /**
   * Life cycle method.
   *
   * @memberof PanHandler
   */
  componentDidMount() {
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        {
          nativeEvent: {
            pageX: this.state.pan.x,
            pageY: this.state.pan.y
          }
        }
      ])
    });
  }

  /**
   * UI
   *
   * @returns jsx
   * @memberof PanHandler
   */
  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    };
    return (
      <Animated.View flex={1}>
        <Animated.View
          style={[panStyle, styles.circle]}
          {...this.panResponder.panHandlers}
        />
      </Animated.View>
    );
  }
}
///
let CIRCLE_RADIUS = 30;
///
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "#000000",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});
