import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../../styles';
import { constants as c } from '../../util';

const frases = [
  'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz.',
  'Não coloque limites em seus sonhos, coloque fé.',
  'Não importa o que você decidiu. O que importa é que isso te faça feliz.',
  'Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.',
  'O que você tem de diferente é o que você tem de mais bonito.',
  'Algumas pessoas sempre vão jogar pedras no seu caminho, depende de você o que você faz com elas. Uma parede ou uma ponte?',
  'Viva simples, sonhe grande, seja grato, dê amor, ria muito!',
  'Independente do que estiver sentindo, levante-se, vista-se e saia para brilhar.',
  'Prefira o sorriso, faz bem a você e aos que estão ao seu redor. Dê risada de tudo, de si mesmo. Não adie alegrias. Seja feliz hoje!',
  'Deixe o seu sorriso mudar o mundo, mas nunca deixe o mundo mudar o seu sorriso.',
  'Assim como o sol retorna com o seu brilho após a tempestade, você encontrará luz após a escuridão.',
  'Não deixe que o medo de cair te impeça de voar.',
  'Você é único. Deste modo, ame-se, cuide-se, queira-se bem todos os dias. Perdoe-se sempre e tenha paz consigo mesmo.',
  'Seja quem você é, não quem o mundo deseja que você seja.',
  'Metade de você é melhor do que qualquer outra pessoa por inteiro.',
  'Seja otimista. Esta é a melhor forma de ver a vida.',
  'Mantenha o foco no objetivo, centralize a força para lutar e utilize a fé para vencer.',
  'Se você acredita que é capaz, ignore a opinião dos outros e siga em frente. Nem sempre é bom saber o que outros pensam.',
  'Que todo mal vire amor, que toda dor vire flor.',
  'Imagine uma nova história para sua vida e acredite nela.',
  'E que venham novas histórias, novos sorrisos e novas pessoas.',
  'Acredite: tudo tem seu tempo.',
  'Seja otimista. Esta é a melhor forma de ver a vida.',
  'Persista! Se tudo fosse fácil, qualquer um conseguiria.',
  'Nunca é perda de tempo se você conseguiu aprender algo.',
  'Pare de ter medo do que poderia dar errado e pense no que poderia dar certo.',
  'O segredo é um só: acreditar que tudo vai dar certo, porque vai!'
];

class StatusOkScreen extends React.Component {
  constructor(props) {
    super(props);
    //--
    const { navigate, goBack, dispatch } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
    this.dispatch = dispatch;
  }

  componentDidMount() {
    this.storeUsuario(); 
  }

  async storeUsuario() {
    const { id, nome, curso, email, fera } = this.props;
    try {
      await AsyncStorage.setItem(c.SUPER_STORE, JSON.stringify({ id, nome, curso, email, fera }));
    } catch (e) {
      Alert.alert('Semana da Computação', 'Memória insuficiente, tente mais tarde!');
    }
  }

  resetForward() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });
    this.dispatch(resetAction);
  }

  _random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  render() {
    const { nome } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.orange300, padding: 16 }}>
        <StatusBar
          backgroundColor={colors.orange500}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name="emoji-happy"
            color={'#fff'}
            size={120}
          />
          <Text style={{ color: '#fff', padding: 16, fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{'Conta Criada Com Sucesso!'}</Text>
          <View style={{ marginTop: 16, }}>
            <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{nome}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center', paddingTop: 16 }}>{this._random(frases)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.resetForward()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: colors.orange300 }}>{'Entrar'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  id: state.PerfilReducer.id,
  nome: state.PerfilReducer.nome,
  curso: state.PerfilReducer.curso,
  email: state.PerfilReducer.email,
  fera: state.PerfilReducer.fera,
});

export default connect(mapStateToProps, {})(StatusOkScreen);