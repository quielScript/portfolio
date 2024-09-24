// CREDITS: https://www.youtube.com/watch?v=hjbxaYTMhy0

import { motion, useInView, useAnimation, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	// const slideControls = useAnimate();

	useEffect(
		function () {
			if (isInView) {
				// Fire the animation
				mainControls.start("visible");
				// slideControls.start("visible");
			}
		},
		[isInView, mainControls]
	);

	return (
		<div
			ref={ref}
			style={{
				position: "relative",
				overflow: "hidden",
			}}
		>
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
			{/* <motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#64ffda",
					zIndex: 20,
				}}
			/> */}
		</div>
	);
}

export default Reveal;