 
import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css' 
import { animationCreate } from "../utils/utils";
import ScrollToTop from "../common/scroll-to-top";
import BackToTop from "../common/BackToTop";



const Wrapper = ({ children }: any) => {
	useEffect(() => {
		// animation
		const timer = setTimeout(() => {
			animationCreate();
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	 useEffect(() => {
    AOS.init({
      duration: 1000, // optional settings
      once: true,
    })
  }, [])



	return (
		<>
			{children}
			<ScrollToTop />
			<BackToTop />
		</>
	);
};

export default Wrapper;
