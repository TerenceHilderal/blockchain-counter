import toast from 'react-hot-toast';

interface ProviderRpcError extends Error {
	message: string;
	code: number;
	data?: unknown;
}

export const handleError = (error: ProviderRpcError) => {
	switch (error.code) {
		case 4001:
			toast.error(error.message);
			break;
		case -32602:
			toast.error(error.message);
			break;
		case -32603:
			toast.error(error.message);
			break;
		default:
			break;
	}
};
