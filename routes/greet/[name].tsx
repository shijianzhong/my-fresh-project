/*
 * @Author: shijianzhong
 * @Date: 2022-08-01 16:37:21
 * @LastEditors: shijianzhong
 * @LastEditTime: 2022-08-01 16:37:48
 * @Description: file content
 */
/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}
