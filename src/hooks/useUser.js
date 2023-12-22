import {useContext} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {AuthContext} from "../context/AuthContext";
import {FC_KEY} from "../const/FC_Key";

export const useUser = () => {
  const {user, setUser} = useContext(AuthContext);
  const {setItem} = useLocalStorage();

  const addUser = (user) => {
    setUser ? setUser(user) : null;
    setItem(FC_KEY, JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem(FC_KEY, "");
  };

  return {user, addUser, removeUser};
};
