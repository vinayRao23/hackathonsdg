import { colors } from "@/config/colors";

interface IProps {
  onClick: () => void;
  title: string;
  boxShadow?: boolean;
  btnColor?: string;
  width?: string | number;
  style?: any;
  disabled?: boolean;
  cursor?: string;
}

export const Primary = ({
  onClick,
  title,
  boxShadow,
  btnColor = colors.primary,
  width = "40%",
  style,
  disabled = false,
  cursor = "pointer",
}: IProps) => {
  return (
    <button
      style={{
        backgroundColor: btnColor,
        color: "#fff",
        border: `10px solid ${btnColor}`,
        width,
        borderRadius: 8,
        cursor,
        boxShadow: boxShadow ? `${btnColor} 0px 5px 15px` : "",
        ...style,
        fontFamily: "'Oswald', sans-serif",
      }}
      disabled={disabled}
      className="landingpagebutton"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
