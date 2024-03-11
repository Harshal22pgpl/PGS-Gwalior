import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutManagementCard({ img, name, post, link }) {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto rounded-lg overflow-hidden">
      <div className="w-full mx-auto  flex  justify-center items-center">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className="rounded-full border-2 border-tteal cursor-pointer"
          onClick={() => {
            router.push(link);
          }}
        />
      </div>
      <div className="p-2 h-40">
        <h2 className="text-xl font-semibold  text-center">{name}</h2>
        <p className="text-gray-600 text-center">{post}</p>
      </div>
    </div>
  );
}
