import {useEffect} from "react";
import {useUser} from "./useUser";
import {useLocalStorage} from "./useLocalStorage";
import {FC_KEY} from "../const/FC_Key";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// De momento incompleto, sobre la marcha iremos perfeccionandolo.
// En Strapi, Cuando se crea un usuario y no se le asigna un rol, o se usa la ruta api/auth/local/register, se le asigna automáticamente el rol "autenticado". Esto podemos cambiarlo en la pestaña configuración avanzada de Strapi.

export const useAuth = () => {
  const {user, addUser, removeUser} = useUser();
  const {getItem} = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getItem(FC_KEY);
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [getItem, addUser]);

  const login = async (LoginFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        LoginFormData
      );
      const {jwt} = response.data;
      addUser({token: jwt});
      navigate("/", {replace: true});
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeUser();
  };

  return {user, login, logout};
};
