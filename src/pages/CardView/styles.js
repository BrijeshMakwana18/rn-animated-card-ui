import {StyleSheet} from 'react-native';
import {colors, fonts, perfectSize} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryBackgroundColor,
  },
  cardView: {
    height: '50%',
    width: '80%',
    backgroundColor: colors.cardBackgroundColor,
    borderRadius: perfectSize(20),
    alignItems: 'center',
  },
  cardImage: {
    height: '75%',
    width: '100%',
  },
  cardTitle: {
    color: colors.primaryLightColor,
    fontFamily: fonts.quicksandBold,
    fontSize: perfectSize(30),
  },
  buttonContainer: {
    height: '15%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: perfectSize(10),
    backgroundColor: colors.primaryLightColor,
  },
  buttonTitle: {
    fontFamily: fonts.quicksandBold,
    fontSize: perfectSize(20),
  },
});
