const createInputData = (type, id, placeholder, errorMessage) => ({
    type,
    id,
    placeholder,
    errorMessage
});

const formInputData = {
    name: createInputData("text", "name", "Digite seu nome", "Por favor, insira um nome válido!"),
    email: createInputData("email", "email", "Digite seu email", "Por favor, insira um e-mail válido!"),
    postalCode: createInputData("text", "postalCode", "Digite seu CEP", "Por favor, insira um CEP válido!")
};

export default formInputData;
