import { Result } from "@/interface";

const coleslawUrl = process.env.NEXT_PUBLIC_COLESLAW_API;
const tbridgeUrl = process.env.NEXT_PUBLIC_TBRIDGE_API;

const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

interface CustomRequestInit extends RequestInit {
    params?: Record<string, string>;
}

const RequestInterceptor = async (
    url: string,
    options: CustomRequestInit
): Promise<CustomRequestInit> => {
    const mergedOptions: CustomRequestInit = {
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

export const CustomFetch = async <T>(
    url: string,
    options: CustomRequestInit = {},
    fetches: "coleslaw" | "tbridge"
): Promise<Result<T>> => {
    try {
        const fetchUrl = fetches === "coleslaw" ? coleslawUrl : tbridgeUrl;
        const CustomUrl = buildQueryString(url, options.params);
        const processedOptions = await RequestInterceptor(`${fetchUrl}${CustomUrl}`, options);
        const response = await fetch(`${fetchUrl}${CustomUrl}`, processedOptions);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const processedResponse = await ResponseInterceptor(response);
        const data = await processedResponse.json();

        return {
            success: true,
            data,
        };
    } catch (error: unknown) {
        return {
            success: false,
            error: {
                name: (error as Error).name,
                message: (error as Error).message,
            },
        };
    }
};

const buildQueryString = (url: string, params?: Record<string, string>): string => {
    let customUrl = url;
    if (params) {
        const searchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            searchParams.append(key, value);
        }
        customUrl += `?${searchParams.toString()}`;
    }
    return customUrl;
};
