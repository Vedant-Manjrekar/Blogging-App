import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "./app/components/StudioNavbar";
import Logo from "./app/components/Logo";

export default defineConfig({
  basePath: "/studio",
  name: "BLOGGING_APP",
  title: "BLOGGING APP",

  projectId: "oyy97yh4",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: Logo,
    },
  },
});
