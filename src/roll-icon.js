import { registerSvg } from "tram-one";

const svg = registerSvg()

export default () => {
	return svg`
		<svg xmlns="http://www.w3.org/2000/svg" class="flip-icon icon" viewBox="0 0 4 2.5" >
			<marker style="overflow:visible" id="TriangleOutS" refX="0" refY="0" orient="auto" >
				<path transform="scale(0.2)" style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt" d="M 5.77,0 -2.88,5 V -5 Z" id="path53731"/>
			</marker>
			<g id="g103810" transform="matrix(0.89383343,0,0,0.89383343,-197.25,-35.25)">
				<g id="g103808">
					<rect style="fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none" id="rect103802" width="3.2948284" height="3.2241793" x="221.28024" y="39.589916"/>
					<path style="fill:none;stroke:#000000;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#TriangleOutS)" d="m 221.84171,41.440029 c 0.0809,-1.432487 1.39783,-1.143678 1.39783,-1.143678" id="path103804" />
					<path style="fill:none;stroke:#000000;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#TriangleOutS)" d="m 224.03663,41.023413 c -0.0809,1.43249 -1.39783,1.14368 -1.39783,1.14368" id="path103806" />
				</g>
			</g>
		</svg>
	`
}
