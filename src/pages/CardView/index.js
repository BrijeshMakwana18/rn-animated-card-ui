import React, {useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import {colors, fonts, images, perfectSize} from '../../theme';
const sizesData = [{label: 8}, {label: 9}, {label: 10}, {label: 11}];
const colorsData = [{color: '#CA0A1C'}, {color: '#A6E040'}, {color: '#42B0F7'}];
export default function CardView() {
  //Animated Values
  const shoeImageAngle = useRef(new Animated.Value(0)).current;
  const shoeImageTop = useRef(new Animated.Value(0)).current;
  const cardTitleTop = useRef(new Animated.Value(0)).current;
  const sizesTop = useRef(new Animated.Value(0)).current;
  const sizesOpacity = useRef(new Animated.Value(0)).current;
  const buttonTop = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const shoeImageSpin = shoeImageAngle.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const handleOnCardPress = () => {
    Animated.parallel([
      Animated.timing(shoeImageAngle, {
        toValue: -10,
        duration: 1000,
        easing: Easing.elastic(2),
        useNativeDriver: false,
      }),
      Animated.timing(shoeImageTop, {
        toValue: perfectSize(-100),
        duration: 1000,
        easing: Easing.elastic(2),
        useNativeDriver: false,
      }),
      Animated.timing(cardTitleTop, {
        toValue: perfectSize(-100),
        duration: 1000,
        easing: Easing.elastic(2),
        useNativeDriver: false,
      }),
      Animated.timing(sizesTop, {
        toValue: perfectSize(-80),
        duration: 1000,
        easing: Easing.elastic(2),
        useNativeDriver: false,
      }),
      Animated.timing(sizesOpacity, {
        toValue: perfectSize(1),
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(buttonTop, {
          toValue: perfectSize(-45),
          duration: 1000,
          easing: Easing.elastic(2),
          useNativeDriver: false,
        }),
        Animated.timing(buttonOpacity, {
          toValue: perfectSize(1),
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    }, 1000);
  };
  //RenderItem for sizes and color selector
  const renderItem = (item, type) => {
    const isSizes = type == 'sizes' ? true : false;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: perfectSize(30),
          width: perfectSize(30),
          backgroundColor: isSizes ? colors.primaryLightColor : item.color,
          borderRadius: perfectSize(isSizes ? 5 : 15),
          marginLeft: perfectSize(10),
        }}>
        {isSizes && <Text>{item.label}</Text>}
      </View>
    );
  };
  const renderSizesAndColors = type => {
    const isSizes = type == 'sizes' ? true : false;
    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: isSizes ? 0 : perfectSize(20),
          top: sizesTop,
          opacity: sizesOpacity,
        }}>
        <Text
          style={{
            fontFamily: fonts.quicksandBold,
            color: colors.primaryLightColor,
            fontSize: perfectSize(16),
          }}>
          {isSizes ? 'SIZES : ' : 'COLORS : '}
        </Text>
        <View>
          <FlatList
            data={isSizes ? sizesData : colorsData}
            horizontal
            renderItem={({item, index}) => renderItem(item, type)}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => handleOnCardPress()}>
        <Animated.Image
          source={images.shoe}
          style={[
            styles.cardImage,
            {
              transform: [{rotate: shoeImageSpin}],
              top: shoeImageTop,
            },
          ]}
        />
        <Animated.Text style={[styles.cardTitle, {top: cardTitleTop}]}>
          {'Nike Shoes'}
        </Animated.Text>
        {renderSizesAndColors('sizes')}
        {renderSizesAndColors('colors')}
        <Animated.View
          style={[
            styles.buttonContainer,
            {top: buttonTop, opacity: buttonOpacity},
          ]}>
          <Text style={styles.buttonTitle}>{'Add To Cart'}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
