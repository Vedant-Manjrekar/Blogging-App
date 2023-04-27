import { createClient } from "next-sanity";

const projectId = "oyy97yh4";
const dataset = "production";
const apiVersion = "2023-04-19";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
