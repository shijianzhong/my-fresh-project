/*
 * @Author: shijianzhong
 * @Date: 2022-08-01 16:51:08
 * @LastEditors: shijianzhong
 * @LastEditTime: 2022-08-01 16:53:50
 * @Description: file content
 */
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};