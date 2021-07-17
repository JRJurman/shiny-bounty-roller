import { registerSvg } from "tram-one";

const svg = registerSvg()

export default () => {
	return svg`
		<svg xmlns="http://www.w3.org/2000/svg" class="flip-icon icon" viewBox="0 0 4 2.5" >
			<marker style="overflow:visible" id="TriangleOutS-0" refX="0" refY="0" orient="auto" >
				<path transform="scale(0.2)" style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt" d="M 5.77,0 -2.88,5 V -5 Z" id="path53731-1"/>
			</marker>
			<g id="g13935-8" transform="matrix(0.89383343,0,0,0.89383343,-197.25,-35.25)" style="display:inline">
				<rect style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none" id="rect13931-7" width="3.2948284" height="3.2241793" x="221.28024" y="39.589916"/>
				<path style="fill:none;stroke:#000000;stroke-width:0.465;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#TriangleOutS-0)" d="m 223.06549,39.627941 c 0.0599,-0.587925 1.68937,-1.319107 0.69688,1.461599" id="path13933-3" />
			</g>
		</svg>
	`
}
