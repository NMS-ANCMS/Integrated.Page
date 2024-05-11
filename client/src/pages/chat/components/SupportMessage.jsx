import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

function SupportMessage({ created_at, body, path }) {
  return (
    <div className=" w-full flex justify-end p-3">
      <div className=" w-1/3 max-lg:w-3/4 p-6 border border-[#E8E8EA] bg-g-3 rounded-xl rounded-bl-none">
        <p className=" text-sm break-words text-g-7">{body}</p>
        <div className=" flex items-center mt-4 justify-between">
          <p className=" text-g-6">{created_at}</p>
          {path && (
            <a
              href={`${path}`}
              className="flex flex-row-reverse items-center gap-2 text-secondary"
              target="_blank"
            >
              <AiOutlineDownload className=" w-5 h-5" />
              <p className=" text-sm">فایل</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SupportMessage;
