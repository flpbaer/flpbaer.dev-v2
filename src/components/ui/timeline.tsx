import React, { ReactNode } from 'react';

type TimelineItemProps = {
  title: string;
  time: string;
  role: string;
  description: ReactNode;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, time, role, description }) => {
  return (
    <div className="flex flex-col md:flex-row mb-8">
      {/* Seção de título, cargo e tempo */}
      <div className="md:w-1/3 pr-3 md:text-right">
        <h3 className="font-bold">{title}</h3>
        <span className="text-gray-500">{role}</span>
        <p className="text-gray-500">{time}</p>
      </div>

      {/* Seção de descrição */}
      <div className="w-full pl-0 md:pl-6 mt-4 md:mt-0 md:border-l-2 border-gray-800">
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
