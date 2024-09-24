// CREDITS: https://www.youtube.com/watch?v=hjbxaYTMhy0

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealUp({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(
		function () {
			if (isInView) {
				// Fire the animation
				mainControls.start("visible");
			}
		},
		[isInView, mainControls]
	);

	return (
		<div ref={ref}>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 0.5,
					delay: 0.25,
				}}
			>
				{children}
			</motion.div>
		</div>
	);
}

export default RevealUp;
