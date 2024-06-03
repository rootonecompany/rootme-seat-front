const COLESLAW_API_URL =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_COLESLAW_API
        : process.env.COLESLAW_API;
const TBRIDGE_API_URL =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_TBRIDGE_API
        : process.env.TBRIDGE_API;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },

    async rewrites() {
        return [
            {
                source: "/api/v1/:path*",
                destination: `${COLESLAW_API_URL}/:path*`,
            },
            {
                source: "/:path*",
                destination: `${TBRIDGE_API_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;
