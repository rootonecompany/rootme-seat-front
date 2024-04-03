const defaultHeaders = {
    "Content-Type": "application/json",
};

const RequestInterceptor = async (url: string, options: RequestInit): Promise<RequestInit> => {
    const mergedOptions: RequestInit = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...(options.headers || {}),
        },
    };

    return mergedOptions;
};
const ResponseInterceptor = async (response: Response): Promise<Response> => {
    return response;
};

export const CustomFetch = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
    try {
        const processedOptions = await RequestInterceptor(url, options);
        const response = await fetch(url, processedOptions);
        const processedResponse = await ResponseInterceptor(response);
        const data = await processedResponse.json();

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
