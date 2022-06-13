import Svg, { Path } from "react-native-svg";

const BackgroundSvg = (props) => (
    <Svg
    width={428}
    fill="none"

    /** Le agrego estos estilos para igualar el color de fondo y colocar este SVG por debajo de los otros componentes */
    style={{backgroundColor: "#031F33", height: 500, position: "absolute", bottom: 0, right: 0, left: 0, zIndex: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <Path
        d="M-1 0v478h430V73.868c-14.183-14.785-86.352-53.89-214-6.672C85.75 115.008 15.352 78.698-1 0Z"
        fill="#86FF2E"
      />
    </Svg>
)

export default BackgroundSvg;

 