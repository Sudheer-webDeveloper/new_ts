import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";


export const ChatCard: React.FC = () => {
    return (
      <Card className="p-6 rounded-2xl flex items-start flex-col gap-2.5">
        <Skeleton className="w-full h-10" />
        <Skeleton className=" w-2/4 h-10" />
      </Card>
    );
  };



  export default ChatCard;