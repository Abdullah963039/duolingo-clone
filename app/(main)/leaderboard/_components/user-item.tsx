import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Props {
  userId: string;
  userName: string;
  userImageSrc: string;
  points: number;
  index: number;
}

export const UserItem = ({
  points,
  userId,
  userImageSrc,
  userName,
  index,
}: Props) => {
  return (
    <div
      key={userId}
      className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-green-200/50"
    >
      <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
      <Avatar className="border bg-green-500 size-12 ml-3 mr-6">
        <AvatarImage src={userImageSrc} className="object-cover" />
      </Avatar>
      <p className="font-bold text-neutral-800 flex-1">{userName}</p>
      <p className="text-muted-foreground">{points} XP</p>
    </div>
  );
};
