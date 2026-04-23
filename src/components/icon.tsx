import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = (LucideIcons as any)[name];

  if (!LucideIcon) {
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <LucideIcon {...props} />;
};
