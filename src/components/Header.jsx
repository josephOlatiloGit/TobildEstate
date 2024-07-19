import React from "react";
import { defineOneEntry } from "oneentry";
import Link from "next/link";
/**
 *
 * In other to see this header in all our pages we need to add this header component in the layouts.js root file.
 * We install oneentry from npm package o our app
 */

const { Menus } = defineOneEntry("https://tobildestate.oneentry.cloud", {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
  userToken: "",
});

export default async function Header() {
  const menus = await Menus.getMenusByMarker("main");

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Tobild</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <ul className="flex gap-5">
          {menus.pages.map((page) => (
            <Link
              href={page.pageUrl === "home" ? "/" : "/" + page.pageUrl}
              key={page.localizeInfos.id}
            >
              <li className="text-xs md:text-base text-slate-700 hover:underline">
                {page.localizeInfos.menuTitle}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
