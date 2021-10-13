import { sleep } from "../utils/sleep";

export const doSignin = async (users, email, password) => {
  let cumple = false;
  const storedUser = users.find((user) => user.email === email);

  if (!storedUser) {
    return Promise.reject("El usuario ingresado no existe");
  }

  const user = users.find((user) => {
    if (user.email === email && user.password === password) {
      localStorage.setItem("login", JSON.stringify(user));
      return (cumple = true);
    }
    return cumple;
  });

  await sleep(1000);
  if (!cumple) {
    return Promise.reject("La contrasena es incorrecta");
  }
  //si llega aca se resuelve bien la promesa
  return user;
};

export const doSignup = async (users, setUsers, user) => {
  //CAMPOS REQUERIDOS
  const fieldsRequired = ["email", "password"];
  const errors = [];

  //chequeo si cumple con los campos requeridos sino devuelvo el array de errores

  Object.entries(user).forEach((element) => {
    const [key, value] = element;
    const isFieldRequired = fieldsRequired.includes(key);

    if (!value && isFieldRequired) {
      const error = `${key} is required`;
      errors.push(error);
    }
  });

  if (errors.length > 0) {
    await sleep(1000);
    return Promise.reject(errors);
  } else {
    await sleep();
    setUsers([...users, user]);
  }
};

//toda async function devuelve una promesa en el caso de haber errores la promesa se rechaza y devuelve los errores y si esta todo ok se resuelve despues de 2000ms
