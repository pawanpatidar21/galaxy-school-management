import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCard = async ({
  type,
  id,
}: {
  type: "admin" | "teacher" | "student" | "parent";
  id: string;
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };
  const gradients = [
    "bg-gradient-to-r from-red-400 to-red-600",
    "bg-gradient-to-r from-blue-400 to-blue-600",
    "bg-gradient-to-r from-orange-400 to-orange-600", // 🟠 Replaced Green with Orange!
    "bg-gradient-to-r from-yellow-400 to-yellow-600",
    "bg-gradient-to-r from-purple-400 to-purple-600",
    "bg-gradient-to-r from-pink-400 to-pink-600",
    "bg-gradient-to-r from-indigo-400 to-indigo-600",
    "bg-gradient-to-r from-teal-400 to-teal-600",
  ];

  const textColors = [
    "text-red-900",
    "text-blue-900",
    "text-orange-900", // 🟠 Matched the new Orange gradient!
    "text-yellow-900",
    "text-purple-900",
    "text-pink-900",
    "text-indigo-900",
    "text-teal-900",
  ];
  const bgColor = gradients[parseInt(id) % gradients.length]; // Choose a gradient dynamically
  const textColor = textColors[parseInt(id) % textColors.length];

  const data = await modelMap[type].count();

  return (
    <div
      className={`rounded-2xl ${bgColor} p-4 flex-1 min-w-[130px] transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className={`text-2xl font-semibold my-4 ${textColor}`}>{data}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-100">{type}s</h2>
    </div>
  );
};

export default UserCard;
