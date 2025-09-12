import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
	baseURL: "/api",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Get admin key from localStorage
const getAdminKey = () => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("admin_key");
	}
	return null;
};

// API functions
export const spellingAPI = {
	// Get all spelling entries or specific entry by slug
	getEntries: async (slug?: string) => {
		const url = slug ? `/spelling?slug=${slug}` : "/spelling";
		const response = await api.get(url);
		return response.data;
	},

	// Create new spelling entry
	createEntry: async (entryData: any) => {
		const adminKey = getAdminKey();
		if (!adminKey) {
			throw new Error("Admin key not found");
		}

		const response = await api.post("/spelling", {
			accessKey: adminKey,
			...entryData,
		});
		return response.data;
	},

	// Update spelling entry
	updateEntry: async (id: string, entryData: any) => {
		const adminKey = getAdminKey();
		if (!adminKey) {
			throw new Error("Admin key not found");
		}

		const response = await api.put("/spelling", {
			accessKey: adminKey,
			id,
			...entryData,
		});
		return response.data;
	},

	// Delete spelling entry
	deleteEntry: async (id: string) => {
		const adminKey = getAdminKey();
		if (!adminKey) {
			throw new Error("Admin key not found");
		}

		const response = await api.delete(
			`/spelling?id=${id}&accessKey=${adminKey}`
		);
		return response.data;
	},

	// Test authentication
	testAuth: async (accessKey: string) => {
		const response = await api.post("/spelling", {
			accessKey,
			slug: "test-auth",
		});
		return response.data;
	},
};

export default api;
