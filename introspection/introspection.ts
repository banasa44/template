import { JsonFileLoader } from "@graphql-tools/json-file-loader";
import { loadSchema } from "@graphql-tools/load";

// Define a function to asynchronously load the schema
export async function loadGraphQLSchema() {
  const schema = await loadSchema("./tournaments.json", {
    loaders: [new JsonFileLoader()],
  });
  return schema;
}

export const schema = loadGraphQLSchema();
