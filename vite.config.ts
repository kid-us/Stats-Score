// // import path from "path";
// // import tailwindcss from "@tailwindcss/vite";
// // import react from "@vitejs/plugin-react";
// // import { defineConfig, loadEnv } from "vite";

// // // https://vite.dev/config/
// // export default defineConfig(({ mode }) => {
// //   const env = loadEnv(mode, process.cwd(), "");
// //   const apiUrl = env.VITE_API_URL || "https://api.football-data.org/v4";
// //   const apiToken = env.VITE_ACCESS_TOKEN;

// //   return {
// //     plugins: [react(), tailwindcss()],
// //     resolve: {
// //       alias: {
// //         "@": path.resolve(__dirname, "./src"),
// //       },
// //     },
// //     server: {
// //       proxy: {
// //         "/api": {
// //           target: apiUrl,
// //           changeOrigin: true,
// //           secure: true,
// //           rewrite: (path) => path.replace(/^\/api/, ""),
// //           configure: (proxy, _options) => {
// //             proxy.on("proxyReq", (proxyReq, _res) => {
// //               // Add the authentication header
// //               if (apiToken) {
// //                 proxyReq.setHeader("X-Auth-Token", apiToken);
// //               }
// //             });
// //           },
// //         },
// //       },
// //     },
// //   };
// // });

// import path from "path";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import { defineConfig, loadEnv } from "vite";

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   const apiUrl = env.VITE_API_URL || "http://localhost:3000/api";
//   const apiToken = env.VITE_ACCESS_TOKEN;

//   return {
//     plugins: [react(), tailwindcss()],
//     resolve: {
//       alias: {
//         "@": path.resolve(__dirname, "./src"),
//       },
//     },
//     server: {
//       // Only used for local dev
//       proxy: {
//         "/api": {
//           target: apiUrl,
//           changeOrigin: true,
//           secure: false,
//           rewrite: (path) => path.replace(/^\/api/, ""),
//           configure: (proxy, _options) => {
//             proxy.on("proxyReq", (proxyReq, _res) => {
//               if (apiToken) {
//                 proxyReq.setHeader("X-Auth-Token", apiToken);
//               }
//             });
//           },
//         },
//       },
//     },
//   };
// });

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
