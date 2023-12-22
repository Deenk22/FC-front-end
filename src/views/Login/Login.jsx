import {useState} from "react";
import LoginView from "./LoginView";

export default function Login() {
  const [isMember, setIsMember] = useState(true);

  const handleActive = () => {
    setIsMember(!isMember);
  };

  return (
    <>
      <LoginView handleActive={handleActive} isMember={isMember} />
    </>
  );
}
