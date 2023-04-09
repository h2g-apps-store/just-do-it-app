import React from "react";
import { ItemTask } from "./ItemTask";

export const Tasks: React.FC = () => {
  return (
    <>
      <div className="w-auto">
        <ul className="space-y-2">
          <ItemTask />
        </ul>
      </div>
    </>
  );
};
