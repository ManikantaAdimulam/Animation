import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  InteractionManager
} from "react-native";
import { PageView } from "./PageView";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

class TabBar extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onScrollEndDrag = this.onScrollEndDrag.bind(this);
    this.state = {
      left: new Animated.Value(0),
      toValue: 0,
      selectedIndex: new Animated.Value(0),
      tabSelected: true,
      index: 0
    };
    this.state.selectedIndex.addListener(data => {
      if (this.state.index != data.value) {
        this.setState({ index: data.value });
      }
    });
  }

  onClick = index => {
    const presentIndex = index;
    Animated.timing(this.state.left, {
      toValue: index * (width / this.props.titles.length),
      duration: 150
    }).start();
    this.pageViewRef._listRef.scrollToIndex({ index: index, animated: true });
    this.state.selectedIndex.setValue(presentIndex);
  };

  onScroll = evt => {
    const index =
      parseInt(evt.nativeEvent.contentOffset.x / width) *
      (width / this.props.titles.length);
    InteractionManager.runAfterInteractions(() => {
      Animated.timing(this.state.left, {
        toValue: index,
        duration: 50
      }).start();
    });
  };
  onScrollEndDrag = evt => {
    const value = parseInt(evt.nativeEvent.contentOffset.x / width);
    this.state.selectedIndex.setValue(parseInt(value));
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.menuBar}>
            <View style={styles.menuBarItemsView}>
              {this.props.titles.map((item, index) => {
                return (
                  <View
                    style={{
                      height: 44,
                      width: width / this.props.titles.length
                    }}
                    key={index.toString()}
                  >
                    <MenuItem
                      item={item}
                      onPress={() => this.onClick(index)}
                      key={index.toString()}
                      isSelected={this.state.index}
                      index={index}
                      key={index.toString()}
                    />
                  </View>
                );
              })}
            </View>
            <Animated.View
              style={[
                styles.underLayer,
                {
                  marginLeft: this.state.left,
                  width: width / this.props.titles.length
                }
              ]}
            />
          </View>
        </View>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <PageView
            pageViewRef={ref => {
              this.pageViewRef = ref;
            }}
            onScrollToIndex={this.onScroll}
            onScrollEndDrag={this.onScrollEndDrag}
          >
            {this.props.tabs}
          </PageView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  data: state.reducer
});
export default connect(mapStateToProps)(TabBar);

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  menuBar: {
    height: 40,
    width,
    backgroundColor: "red",
    borderBottomWidth: 0.5,
    borderColor: "#00000050",
    // borderWidth: 1,
    // borderColor: "red",
    // top: 20
  },
  menuBarItemsView: {
    height: 36,
    width,
    backgroundColor: "red",
    borderWidth: 0.5,
    borderColor: "red",
    flexDirection: "row"
  },
  menuItem: {
    height: 13,
    // width: width / 4,
    justifyContent: "center",
    alignItems: "center"
  },
  underLayer: {
    height: 3.5,
    // width: width / 4,
    backgroundColor: "white"
  },
  item: {
    // padding: 10,
    fontSize: 18
  }
});
