import { stackMiddlewares } from "@/middleware/stackMiddleware";
import { middleware1 } from "@/middleware/middleware1";
const middlewares = [middleware1];
export default stackMiddlewares(middlewares);