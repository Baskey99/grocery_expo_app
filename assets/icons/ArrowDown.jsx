import Svg, { Path } from "react-native-svg";

export default function ArrowDown({
  size = 24,
  color = "#000000",
  strokeWidth = 2,
  ...props
}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...props} // allows parent components to override width, height, etc.
    >
      <Path
        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
