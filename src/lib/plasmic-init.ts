// Plasmic configuration
// When you're ready to use Plasmic visual builder, configure your project here
// For now, components can be used directly in code

export const PLASMIC_CONFIG = {
  projectId: process.env.PLASMIC_PROJECT_ID || "PASTE_YOUR_PROJECT_ID_HERE",
  projectToken: process.env.PLASMIC_PROJECT_TOKEN || "PASTE_YOUR_PROJECT_TOKEN_HERE",
  preview: true,
};

// You can initialize Plasmic loader when needed:
// import { initPlasmicLoader } from "@plasmicapp/loader-fetcher";
// export const PLASMIC = initPlasmicLoader({
//   projects: [
//     {
//       id: PLASMIC_CONFIG.projectId,
//       token: PLASMIC_CONFIG.projectToken,
//     },
//   ],
//   preview: PLASMIC_CONFIG.preview,
// });
