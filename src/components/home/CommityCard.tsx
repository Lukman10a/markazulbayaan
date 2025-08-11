import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";

export interface CommunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  const { theme } = useTheme();

  return (
    <Card className={`border-2 border-yellow-500 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-700 text-white' 
        : 'bg-black text-white'
    }`}>
      <CardHeader>
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={`mb-6 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-400'
        }`}>
          {description}
        </CardDescription>
        <Button asChild variant="link" className="text-yellow-400 p-0 hover:text-yellow-300 transition-colors duration-200">
          <Link href={link}>Learn more</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
