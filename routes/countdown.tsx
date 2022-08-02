/*
 * @Author: shijianzhong
 * @Date: 2022-08-02 08:22:31
 * @LastEditors: shijianzhong
 * @LastEditTime: 2022-08-02 08:22:40
 * @Description: file content
 */
/** @jsx h */
import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      The big event is happening <Countdown target={date.toISOString()} />.
    </p>
  );
}
