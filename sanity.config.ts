/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\admin-studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/admin-studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            ...(S.defaults().getItems() ?? []),
            orderableDocumentListDeskItem({ type: "imageStore", S, context }),
            orderableDocumentListDeskItem({ type: "package", S, context }),
            // ... all other desk items
          ]);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
