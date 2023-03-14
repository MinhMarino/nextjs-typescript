import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "@/model/MiddlewareFactory";
export const middleware1: MiddlewareFactory = (next) => {
  return (request: NextRequest, _next: NextFetchEvent) => {
    console.log("Middleware 1");
    return next(request, _next);
  };
};