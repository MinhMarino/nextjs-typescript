import { NextMiddleware, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/model/MiddlewareFactory";
export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  console.log("aaaaaaaaaaaaaaaaaa");
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}