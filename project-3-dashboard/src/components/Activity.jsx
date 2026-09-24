import React from "react";

const Activity = ({ title, description, time }) => {
  return (
    <div className="flex items-center justify-between border-b pb-4 last:border-0">
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
};

export default Activity;
