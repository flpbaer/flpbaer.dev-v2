"use client"

import { ReactNode, useState } from "react";

type TabProps = {
  label: string;
  children: ReactNode;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

type TabsProps = {
  children: React.ReactElement<TabProps>[];
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full">
    <div className="w-full flex justify-start">
      {children.map((child) => (
        <button
          key={child.props.label}
          className={`${
            activeTab === child.props.label
              ? 'inset-0 dark:bg-slate-950'
              : 'bg-transparent opacity-30'
          } py-2 px-4 font-medium rounded-md`}
          onClick={(e) => handleClick(e, child.props.label)}
        >
          {child.props.label}
        </button>
      ))}
    </div>
    <div className="py-4">
      {children.map((child) => {
        if (child.props.label === activeTab) {
          return <div key={child.props.label}>{child.props.children}</div>;
        } else {
          return null;
        }
      })}
    </div>
  </div>
  );
};

export default Tabs;
