/**
 * Get a string env variable
 * @param key The env variable key
 * @param defaultValue The default value
 *
 * @returns The value
 */
export const envString = (key: string, defaultValue?: string): string => {
	const value = process.env[key] ?? defaultValue;
	if (typeof value !== "string") {
		throw new Error(`Environment variable must be of type string: ${key}`);
	}

	return value;
};
