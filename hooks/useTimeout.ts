import { useEffect, useRef } from 'react';

/**
 * Hook friendly implementation of useTimeout
 * More info at: https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
 * @param callback function to be called
 * @param delay delay before calling the function
 */
const useTimeout = (callback: Function, delay: number) => {
	const timeoutRef = useRef(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect(() => {
		const tick = () => savedCallback.current();
		if (typeof delay === 'number') {
			timeoutRef.current = window.setTimeout(tick, delay);
			return () => window.clearTimeout(timeoutRef.current);
		}
	}, [delay]);
	return timeoutRef;
};

export default useTimeout;
