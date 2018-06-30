import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { avaliarItem, carregaAvaliacoes } from '../../actions/RatingActions';
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
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
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

  submeterAvaliacao = async() => {
    this.setState({ load: true });
    const { starCount } = this.state;
    try {
      await this.props.avaliarItem(this.startToWord(starCount));
      await this.props.carregaAvaliacoes();
      Snackbar.show({
        title: 'Obrigado! Já registramos sua avaliação',
        duration: Snackbar.LENGTH_LONG,
        action: {
          title: 'OK',
          color: colors.green400,
          onPress: () => { /* Do something. */ },
        },
      });
    } catch (e) {
      Alert.alert('Semana da Computação','Erro inesperado ao submeter sua avaliação');
      BackHandler.exitApp();
    }
    this.navBack();

    this.setState({ load: false });
  };

  render() {
    const { load, starCount } = this.state;
    const { ratingNome, ratingId } = this.props;
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
            onPress={this.submeterAvaliacao}
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
  ratingId: state.RatingReducer.ratingId,
});

export default connect(mapStateToProps, {avaliarItem, carregaAvaliacoes})(RatingScreen);