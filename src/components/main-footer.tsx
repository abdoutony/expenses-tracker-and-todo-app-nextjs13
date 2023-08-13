import { signOut } from "next-auth/react";
import React from "react";

export default function MainFooter() {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
      <button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: "/",
          })
        }
      >
        Logout
      </button>
    </div>
  );
}
