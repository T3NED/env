const convertStringifiedBoolean = (value?: string) => {
	if (!value) return undefined;
	if (["true", "1"].includes(value)) return true;
	if (["false", "0"].includes(value)) return false;
	return undefined;
};

/**
 * Get a boolean env variable
 * @param key The env variable key
 * @param defaultValue The default value
 *
 * @returns The value
 */
export const envBoolean = (key: string, defaultValue?: boolean): boolean => {
	const value = convertStringifiedBoolean(process.env[key]) ?? defaultValue;
	if (typeof value !== "boolean") {
		throw new Error(`Environment variable must be of type boolean: ${key}`);
	}

	return value;
};
