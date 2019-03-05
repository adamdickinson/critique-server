import { fileLoader, mergeResolvers } from "merge-graphql-schemas"
import path from "path"

export default mergeResolvers(fileLoader(path.join(__dirname, "/!(*.test).js")))
