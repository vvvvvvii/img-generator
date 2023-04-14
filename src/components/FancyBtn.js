import { useState } from "react";

function FancyBtn({ onChangePage }) {
  const colorArr = [
    {
      bgColor: "#d959f6",
      textColor: "#e9f903",
    },
    {
      bgColor: "#f65959",
      textColor: "#1cf903",
    },
    {
      bgColor: "#ff8e24",
      textColor: "#59f6cf",
    },
    {
      bgColor: "#202020",
      textColor: "#ebebeb",
    },
    {
      bgColor: "#59aaf6",
      textColor: "#b70e9d",
    },
  ];
  const [color, setColor] = useState(colorArr[0]);

  const handleMouseMove = () => {
    const randomIndex = getRandom(colorArr.length);
    setColor(colorArr[randomIndex]);
  };
  const handleMouseLeave = () => {
    setColor(colorArr[0]);
  };
  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };
  const handleClick = () => {
    onChangePage("StepOne");
  };

  return (
    <div>
      <button
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: color.bgColor,
          color: color.textColor,
        }}
        className="btn"
        title="點擊開始"
        onClick={handleClick}
      >
        點擊進入
      </button>
    </div>
  );
}

export default FancyBtn;
