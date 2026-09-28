import React from 'react';
import {
  Clock,
  MessageSquare,
  Target,
  Users,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Award,
  Video,
} from 'lucide-react';
import { SolutionPoint } from '../types';

interface SolutionIconProps {
  name: SolutionPoint['iconName'];
}

export const SolutionIcon: React.FC<SolutionIconProps> = ({ name }) => {
  const iconProps = { className: 'h-6 w-6 text-[#19818F]' };

  switch (name) {
    case 'clock':
      return <Clock {...iconProps} />;
    case 'message-square':
      return <MessageSquare {...iconProps} />;
    case 'target':
      return <Target {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    case 'shield-check':
      return <ShieldCheck {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    case 'book-open':
      return <BookOpen {...iconProps} />;
    case 'award':
      return <Award {...iconProps} />;
    case 'video':
      return <Video {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};
