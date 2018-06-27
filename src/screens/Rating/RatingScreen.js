import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { colors } from '../../styles';

class RatingScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: '',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: colors.cyan500,
      elevation: 0,
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      starCount: 5,
      load: false,
    };
  }

  startToWord = (starCount) => {
    switch(starCount) {
      case 1:
        return 'Péssima';
      case 2:
        return 'Ruim';
      case 3:
        return 'Regular';
      case 4:
        return 'Boa';
      case 5:
        return 'Excelente';
    }
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    const { load, starCount } = this.state;
    const { ratingNome } = this.props;
    const avaliacao = this.startToWord(starCount);
    //--
    return (
      <View style={{ padding: 16, flex: 1, backgroundColor: colors.cyan500 }}>
        <StatusBar backgroundColor={colors.cyan600} />
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontFamily: 'Lato-Italic', color: colors.white,}}>{'Conte sua experiência sobre'}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Lato-Regular', color: colors.white,  marginTop: 16, textAlign: 'center' }}>{ratingNome}</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 26 }}>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={starCount}
            starSize={50}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={colors.orange300}
          />
          <Text style={{fontSize: 24, fontFamily: 'Lato-Regular', color: colors.white,  marginTop: 16, textAlign: 'center',}}>{avaliacao}</Text>
        </View>
        </View>
         <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
        { load ?
          <ActivityIndicator size={50} />
          :
          <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: colors.cyan500 }}>{'Submeter'}</Text>
          </TouchableOpacity>
        }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  ratingNome: state.RatingReducer.ratingNome,
});

export default connect(mapStateToProps, {})(RatingScreen);