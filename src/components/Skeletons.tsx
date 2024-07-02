import React from "react";
import ContentLoader from "react-content-loader";

export const MainSliderSkeleton = ({
  limit = 5,
  className = "",
  itemWidth = "",
}: {
  limit?: number;
  className?: string;
  itemWidth?: string;
}) => {
  const cards = new Array(limit).fill(null);
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {cards.map((_, index) => (
        <ContentLoader
          viewBox="0 0 240 340"
          height={370}
          width={240}
          key={index}
          foregroundColor="#a8a8a8"
          backgroundColor="#ccc"
          className={itemWidth}
        >
          <rect x="3" y="3" rx="10" ry="10" width="235" height="240" />
          <rect x="6" y="254" rx="0" ry="0" width="115" height="14" />
          <rect x="4" y="279" rx="0" ry="0" width="230" height="14" />
          <rect x="4" y="306" rx="0" ry="0" width="200" height="14" />
        </ContentLoader>
      ))}
    </div>
  );
};
