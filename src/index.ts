import "reflect-metadata";
import http from "http";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import express, { Request, Response, NextFunction } from 'express';
import { verifyJWT, loginJWT } from "./middleware/verifyJWT";
import { graphqlHTTP } from "express-graphql";
import { buildSchema, ResolverData } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./generated/type-graphql";
const prisma = new PrismaClient();

async function initialize(){
  const PORT = 3000;
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (request: Request, response: Response) => {
    return response.send("Express + TypeScript Server");
  });

  //authentication
  app.post("/login",loginJWT, (request:express.Request, response:express.Response, next: NextFunction) => {
    console.log();
  });

  app.post("/logout", function (req: express.Request, res: express.Response) {
    res.json({ auth: false, token: null });
  });

  const schema = await buildSchema({
    resolvers,
    validate: false,
    authChecker: ({ root }: ResolverData<any>, roles: string[]) =>  {
      console.log(roles);
      return roles.includes(root.tipo);
    }
  });
  
  var root = {
    hello: () => {
      return 'Hello world!';
    },
  };

  app.use('/api', verifyJWT, graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {
      prisma,
    }
  }));

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

initialize();

