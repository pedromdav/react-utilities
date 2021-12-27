import { useEffect, useState } from 'react';

/**
 * Similar to useState except it backs up to (and restores from) local storage.
 * More info at: https://www.joshwcomeau.com/snippets/react-hooks/use-sticky-state/
 * @param defaultValue default value in case there is none in local storage
 * @param key key used to retrieve value from local storage
 * @returns same as useState
 */
const useStickyState = (defaultValue: any, key: string) => {
	const [value, setValue] = useState(() => {
		const stickyValue = window.localStorage.getItem(key);
		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
};

export default useStickyState;
