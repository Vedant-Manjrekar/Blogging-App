import { definePreview } from "next-sanity/preview";

const projectId = "oyy97yh4";
const dataset = "production";

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
