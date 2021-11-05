import React, {useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import {colors, fonts, images, perfectSize} from '../../theme';
const sizesData = [{label: 8}, {label: 9}, {label: 10}, {label: 11}];
const colorsData = [{color: '#CA0A1C'}, {color: '#A6E040'}, {color: '#42B0F7'}];
export default function CardView() {
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: isSizes ? 0 : perfectSize(20),
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
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => handleOnCardPress()}>
        <Image source={images.shoe} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{'Nike Shoes'}</Text>
        {renderSizesAndColors('sizes')}
        {renderSizesAndColors('colors')}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{'Add To Cart'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
