"use client";

import { Popover, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState } from "react";

const languages = [
  { name: "English", code: "en" },
  { name: "German", code: "de" },
  { name: "French", code: "fr" },
  { name: "Spanish", code: "es" },
  { name: "Russian", code: "ru" },
  { name: "Chinese", code: "zh-CN" },
  { name: "Japanese", code: "ja" },
  { name: "Arabic", code: "ar" },
  { name: "Hindi", code: "hi" },
  { name: "Sinhala", code: "si" },
];

interface LangDropdownProps {
  className?: string;
  panelClassName?: string;
}

const LangDropdown: FC<LangDropdownProps> = ({
  className = "",
  panelClassName = "absolute top-full z-50 w-screen max-w-[200px] px-4 mt-3 right-0 sm:px-0",
}) => {
  const [activeLang, setActiveLang] = useState(languages[0]);
  
  const changeLanguage = (langCode: string) => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
      const newLang = languages.find(l => l.code === langCode);
      if (newLang) setActiveLang(newLang);
    } else {
      // If the selector isn't ready yet, try again in 500ms
      setTimeout(() => changeLanguage(langCode), 500);
    }
  };

  return (
    <div className={`LangDropdown ${className}`}>
      {/* Hidden Google Translate element needed for the API to work */}
      <div id="google_translate_element" className="hidden"></div>
      
      <Popover className="relative w-full flex flex-col items-center">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-[#fa7301]" : "text-opacity-90"}
                group self-center h-10 inline-flex items-center text-[13px] font-semibold hover:text-[#fa7301] transition-colors focus:outline-none`}
            >
              <GlobeAltIcon className="w-4 h-4 mr-1" />
              <span>{activeLang.code.toUpperCase()}</span>
            </Popover.Button>
            
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={panelClassName}>
                <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800">
                  <div className="relative grid gap-1 p-3 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          changeLanguage(item.code);
                          close();
                        }}
                        className="flex items-center p-3 transition duration-150 ease-in-out rounded-xl hover:bg-[#fa7301]/10 text-neutral-800 dark:text-neutral-200 group"
                      >
                        <p className="text-sm font-medium group-hover:text-[#fa7301]">{item.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LangDropdown;
