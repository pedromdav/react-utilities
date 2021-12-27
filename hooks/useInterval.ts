import { useEffect, useRef } from 'react';

/**
 * Calls function on fixed delay
 * More info at: https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
 * @param callback function to call
 * @param delay delay between calls
 */
const useInterval = (callback: Function, delay: number) => {
	const intervalRef = useRef(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect(() => {
		const tick = () => savedCallback.current();
		if (typeof delay === 'number') {
			intervalRef.current = window.setInterval(tick, delay);
			return () => window.clearInterval(intervalRef.current);
		}
	}, [delay]);
	return intervalRef;
};

export default useInterval;
