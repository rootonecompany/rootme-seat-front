interface CustomRequestInit extends RequestInit {
    params?: Record<string, string>;
}

interface HttpResponse<T extends object> {
    data: T;
    config: CustomRequestInit;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: ResponseType;
    url: string;
}

interface Interceptor {
    onRequest: (config: RequestInit) => CustomRequestInit;
    onResponse: <T extends object>(
        response: HttpResponse<T>
    ) => HttpResponse<T> | PromiseLike<HttpResponse<T>>;
    onRequestError: (error: unknown) => Promise<never>;
    onResponseError: (error: unknown) => Promise<never>;
}

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

const fetchingResponse = async <T extends object>(
    response: Response,
    config: CustomRequestInit
) => {
    const data = (await response.json().catch(() => ({}))) as T;
    const { headers, ok, redirected, status, statusText, type, url } = response;
    return { data, config, headers, ok, redirected, status, statusText, type, url };
};

const fetcher = (baseUrl: string = "", options: RequestInit = {}) => {
    let interceptor: Interceptor = {
        onRequest: (config) => config,
        onResponse: (response) => response,
        onRequestError: (error) => Promise.reject(error),
        onResponseError: (error) => Promise.reject(error),
    };

    const fetching = async <T extends object = object>(url: string, config: CustomRequestInit) => {
        config = { ...options, ...interceptor.onRequest(config) };
        config.headers = { ...options.headers, ...config.headers };

        try {
            const returnUrl = baseUrl + buildQueryString(url, config.params);
            const response = await fetch(returnUrl, config);
            return fetchingResponse<T>(response, config)
                .then(interceptor.onResponse)
                .catch(interceptor.onResponseError);
        } catch (error) {
            return interceptor.onRequestError(error);
        }
    };

    return {
        fetching,
    };
};

export default fetcher;
