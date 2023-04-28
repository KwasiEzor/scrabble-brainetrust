import React from "react";

type MemberCardProps = {
  imgUrl: string;
  children: React.ReactNode;
};

const MemberCard: React.FC<MemberCardProps> = ({ imgUrl, children }) => {
  return (
    <div className="min-w-xs w-full rounded-lg overflow-hidden cursor-pointer group relative">
      <img
        src={imgUrl}
        alt="Image card"
        className="w-full group-hover:scale-105 transition-transform "
      />
      <div className="p-4 absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex justify-end flex-col gap-3 text-neutral-50">
        {children}
      </div>
    </div>
  );
};

export default MemberCard;
