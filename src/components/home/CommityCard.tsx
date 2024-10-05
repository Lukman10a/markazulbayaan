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
  return (
    <Card className="bg-gray-800 text-white border-2 border-yellow-500">
      <CardHeader>
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 mb-6">
          {description}
        </CardDescription>
        <Button asChild variant="link" className="text-yellow-400 p-0">
          <Link href={link}>Learn more</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommunityCard;
