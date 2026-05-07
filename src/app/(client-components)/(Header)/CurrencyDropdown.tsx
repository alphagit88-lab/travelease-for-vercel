"use client";

import { Popover, Transition } from "@headlessui/react";
import { BanknotesIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState, useEffect } from "react";

const rates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  LKR: 300,
  AED: 3.67,
  SAR: 3.75,
};

const CurrencyDropdown: FC = () => {
  const [amount, setAmount] = useState<number>(100);
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("LKR");
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const fromRate = rates[from] || 1;
    const toRate = rates[to] || 1;
    setResult((amount / fromRate) * toRate);
  }, [amount, from, to]);

  return (
    <div className="CurrencyDropdown">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-[#fa7301]" : "text-opacity-90"}
                group self-center h-10 inline-flex items-center text-[13px] font-semibold hover:text-[#fa7301] transition-colors focus:outline-none`}
            >
              <BanknotesIcon className="w-4 h-4 mr-1" />
              <span>USD</span>
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
              <Popover.Panel className="absolute z-50 w-screen max-w-[280px] px-4 mt-3 right-0 sm:px-0">
                <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 p-5">
                  <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-4 border-b border-neutral-100 dark:border-neutral-700 pb-2 flex items-center gap-2">
                    <ArrowsRightLeftIcon className="w-4 h-4 text-[#fa7301]" />
                    Currency Converter
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Amount Input */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Amount</label>
                      <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl px-3 py-2 text-sm focus:ring-1 focus:ring-[#fa7301] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                      <select 
                        value={from} 
                        onChange={(e) => setFrom(e.target.value)}
                        className="bg-transparent text-sm font-semibold outline-none border-b-2 border-transparent focus:border-[#fa7301] py-1"
                      >
                        {Object.keys(rates).map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      <ArrowsRightLeftIcon className="w-4 h-4 text-neutral-400" />
                      <select 
                        value={to} 
                        onChange={(e) => setTo(e.target.value)}
                        className="bg-transparent text-sm font-semibold outline-none border-b-2 border-transparent focus:border-[#fa7301] py-1"
                      >
                        {Object.keys(rates).map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    <div className="bg-[#fa7301]/10 rounded-xl p-4 text-center mt-2">
                      <div className="text-[11px] text-neutral-500 font-medium uppercase mb-1">{amount} {from} equals</div>
                      <div className="text-xl font-bold text-[#fa7301]">
                        {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {to}
                      </div>
                    </div>
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

export default CurrencyDropdown;
