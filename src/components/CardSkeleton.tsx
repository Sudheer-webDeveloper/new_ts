import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface CardSkeletonProps {
    length: number;
  }
  
 const CardSkeleton: React.FC<CardSkeletonProps> = ({ length }) => {
    return (
      <Card className="p-6 w-full flex flex-col rounded-2xl gap-4">
        <div className="w-full flex gap-2">
          <Skeleton className="w-2/5 h-3" />
          <Skeleton className="w-2/5 h-3" />
        </div>
        {Array.from({ length }).map((_, index) => (
          <Skeleton key={index} className="w-full h-12 mt-2" />
        ))}
      </Card>
    );
  };
  

  export default CardSkeleton