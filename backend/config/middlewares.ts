export default [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    {
        name: "strapi::cors",
        config: {
            origin: [
                "http://localhost:5173",
                "https://learn-language-app-w7rp.vercel.app",
            ], // your frontend dev server
            methods: ["GET", "POST", "PUT", "DELETE"],
            headers: ["Content-Type", "Authorization"],
            credentials: true,
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
