import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import React from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <div>
        <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
      </div>
    );
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
