import {
  Animated,
  Easing,
} from 'react-native';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      //--
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });
      return { transform: [ { translateX } ] }
    },
  }
};

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// logica pode alterar
const validateSenha = (senha) => {
  try {
    const len = senha.length;
    if (len >= 8) {
      return true; 
    }
  } catch (e) {
    // console.log(e);
  }
  return false;
};

// logica pode alterar
const validateNome = (nome) => {
  try {
    if (nome) {
      return true; 
    }
  } catch (e) {
    // console.log(e);
  }
  return false;
};

// logica pode alterar
const validateCurso = (senha) => {
  try {
    const len = senha.length;
    if (len >= 3) {
      return true; 
    }
  } catch (e) {
    // console.log(e);
  }
  return false;
};



export { transitionConfig, validateEmail, validateSenha, validateNome, validateCurso };