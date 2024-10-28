import React from "react";

export const Step = ({ num, counter }) => {
  return (
    <div className={`circle ${num <= counter ? "smalli" : "largei"}`}>
      {num >= counter ? num : "✓"}
    </div>
  );
};
