const coleslawUrl =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_COLESLAW_API
        : process.env.COLESLAW_API;

const tbridgeUrl =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_TBRIDGE_API
        : process.env.TBRIDGE_API;

const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
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

// class CustomFetchError extends Error {
//     error: {
//         status: number;
//         message: string;
//     };

//     constructor(status: number, message: string) {
//         super(message);
//         this.error = {
//             status,
//             message,
//         };
//     }

//     handleReturnError(): ErrorResponse {
//         return {
//             error: {
//                 status: this.error.status,
//                 message: this.error.message,
//             },
//         };
//     }
// }

// export interface ErrorResponse {
//     error: {
//         status: number;
//         message: string;
//     };
// }

export const CustomFetch = async <T>(
    url: string,
    options: CustomRequestInit = {},
    fetches: "coleslaw" | "tbridge"
): Promise<T> => {
    try {
        const fetchUrl = fetches === "coleslaw" ? coleslawUrl : tbridgeUrl;
        const CustomUrl = buildQueryString(url, options.params);
        const processedOptions = await RequestInterceptor(`${fetchUrl}${CustomUrl}`, options);

        alert(`${tbridgeUrl}, ${coleslawUrl}`);

        const response = await fetch(`${fetchUrl}${CustomUrl}`, processedOptions);
        // if (!response.ok) {
        //     throw new CustomFetchError(response.status, response.statusText);
        // }

        const processedResponse = await ResponseInterceptor(response);
        const data = await processedResponse.json();

        return data;
    } catch (error: unknown) {
        throw error;
        // if (error instanceof CustomFetchError) {
        //     return error.handleReturnError();
        // }

        // return {
        //     error: {
        //         status: 500,
        //         message: "Internal Server Error",
        //     },
        // };
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
