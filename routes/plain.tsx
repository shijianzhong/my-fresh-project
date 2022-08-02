/*
 * @Author: shijianzhong
 * @Date: 2022-08-02 09:02:11
 * @LastEditors: shijianzhong
 * @LastEditTime: 2022-08-02 09:02:21
 * @Description: file content
 */
import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return new Response("Hello World");
  },
};
