"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative  max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("relative px-4 py-2 ", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800  rounded",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white rounded">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  tabs,
  active,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === active.value;
  };
  return (
    <div className="w-full h-full overflow-x-hidden mt-4">
      {tabs.map((tab, idx) => {
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            className={cn(
              isActive(tab) ? "block opacity-100" : "hidden opacity-0",
              "transition-opacity duration-300 ease-in-out"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive(tab) ? 1 : 0 }}
          >
            {isActive(tab) && tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
