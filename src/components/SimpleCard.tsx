import Image from "next/image";
import React from "react";

export type SimpleCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function SimpleCard({
  description,
  imageSrc,
  title,
}: SimpleCardProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <Image
        width={30}
        height={30}
        src={imageSrc}
        alt=""
        className="w-12 h-12 mx-auto mb-4"
      />
      <div className="font-medium text-xl">{title}</div>
      <p className="text-base text-project-200">{description}</p>
    </div>
  );
}
