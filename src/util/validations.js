const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// logica pode alterar
const validateSenha = (senha) => {
  try {
    const len = senha.length;
    if (len >= 8 && /^\d+$/.test(senha)) {
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

export { validateCurso, validateEmail, validateNome, validateSenha };
