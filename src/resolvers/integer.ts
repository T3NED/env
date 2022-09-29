/**
 * Get a integer env variable
 * @param key The env variable key
 * @param defaultValue The default value
 *
 * @returns The value
 */
export const envInteger = (key: string, defaultValue?: number): number => {
	const value = process.env[key] ? Number(process.env[key]) : defaultValue;
	if (typeof value !== "number" || isNaN(value) || value !== Math.floor(value)) {
		throw new Error(`Environment variable must be of type integer: ${key}`);
	}

	return value;
};
