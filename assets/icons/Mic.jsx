import Svg, { Path } from "react-native-svg";

export default function Mic({
  size = 24,
  color = "#000000",
  strokeWidth = 1.5,
  ...props
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...props} // allows override from parent
    >
      <Path
        d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}
