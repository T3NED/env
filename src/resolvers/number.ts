/**
 * Get a number env variable
 * @param key The env variable key
 * @param defaultValue The default value
 *
 * @returns The value
 */
export const envNumber = (key: string, defaultValue?: number): number => {
	const value = process.env[key] ? Number(process.env[key]) : defaultValue;
	if (typeof value !== "number" || isNaN(value)) {
		throw new Error(`Environment variable must be of type number: ${key}`);
	}

	return value;
};
