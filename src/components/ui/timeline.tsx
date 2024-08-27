import React, { ReactNode } from 'react';

type TimelineItemProps = {
  title: string;
  time: string;
  description: ReactNode;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, time, description }) => {
  return (
    <div className="flex flex-row mb-4">
      <div className="w-1/3 pr-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500">{time}</p>
      </div>
      <div className="w-full pl-4 border-l-2 border-gray-800">
        <p>{description}</p>
      </div>
    </div>
  );
};

type TimelineProps = {
  items: TimelineItemProps[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="container mx-auto p-4">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
