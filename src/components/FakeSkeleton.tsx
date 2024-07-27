import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const FakeSkeleton: React.FC = () => {
  return (
    <div className="w-[35%] h-[100px] justify-between flex flex-col gap-5 items-start ">
      <div className="flex_center gap-3">
        <Skeleton className="min-w-10 h-10" />
        <Skeleton className="min-w-[10rem] h-5" />
      </div>
      <div>
        <Skeleton className="w-20 h-10" />
      </div>
    </div>
  );
};

export default FakeSkeleton;