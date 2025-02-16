import { useState } from "react";
import { BsHeartPulse, BsHeartPulseFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, SetStatus] = useState(false);

  const toggle = () => {
    SetStatus(!status);
    onClick();
  };

  if (status)
    return <BsHeartPulseFill size={50} color="red" onClick={toggle} />;
  return <BsHeartPulse size={50} color="red" onClick={toggle} />;
};

export default Like;
