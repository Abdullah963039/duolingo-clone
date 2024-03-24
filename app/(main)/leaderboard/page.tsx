import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { Separator } from "@/components/ui/separator";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

import { UserItem } from "./_components/user-item";

export default async function LeaderboardPage() {
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();
  const topTenUsersPromise = getTopTenUsers();

  const [userProgress, userSubscription, topTenUsers] = await Promise.all([
    userProgressPromise,
    userSubscriptionPromise,
    topTenUsersPromise,
  ]);

  const isPro = !!userSubscription?.isActive;

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Leaderboard
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners in the community.
          </p>

          <Separator className="mb-4 h-0.5 rounded-full" />

          {topTenUsers.map((userProgress, idx) => (
            <UserItem key={userProgress.userId} index={idx} {...userProgress} />
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
}
