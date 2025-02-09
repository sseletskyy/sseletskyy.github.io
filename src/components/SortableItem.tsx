import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type SortableItemProps = {
  children: React.ReactNode;
  id: string;
  index?: number;
  className?: string;
};

export const SortableItem: React.FC<SortableItemProps> = ({ children, id, className }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className={className} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
