"use client";
import React, { useState, useEffect } from "react";
import ProfileCard from "@/components/ProfileCard";
import { useStateContext } from "@/contexts/StateContext";
import { Card } from "@/components/ui/card";
import peopleYouMayKnow from "../../../config/PeopleYouMayKnow.json";
import sugesstedFollows from "../../../config/SuggestedFollows.json";
import sugesstedJobs from "../../../config/SuggestedJobs.json";
import { Button } from "@/components/ui/button";
import ArrayOfCards from "@/components/ArrayOfCards";
import Image from "next/image";
import { FirstAidKit, Link } from "phosphor-react/dist";
import PostCard from "@/components/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/components/CardSkeleton";
import ChatCard from "@/components/ChatCard";
import FakeSkeleton from "@/components/FakeSkeleton";

const ProfileById: React.FC = () => {
  const { dummyUser, setPostModal, posts, fetchPostsData } = useStateContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetching = async () => {
      try {
        setLoading(true);
        await fetchPostsData();
        setLoading(false);
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, []);

  return (
    <section className="flex_start gap-6 mt-2 h-full ">
      <div className="min-w-[300px] max-xl:hidden flex-col flex gap-6 sticky top-4 ">
        {loading ? (
          <Skeleton className="bg-white w-full p-6">
            <FakeSkeleton />
          </Skeleton>
        ) : (
          <ProfileCard userInfo={dummyUser} />
        )}

        {loading ? (
          <CardSkeleton length={3} />
        ) : (
          <ArrayOfCards heading={"Suggested Follows"} data={sugesstedFollows} />
        )}

        {loading ? (
          <ChatCard />
        ) : (
          <Card className="p-4 max-w-[300px] w-full flex gap-2 flex-col rounded-2xl">
            <h2 className="font-medium text-lg text-wrap">
              Didn `&apos;` t find what you were looking for?
            </h2>

            <Button
              variant="default"
              className="text-white w-[130px] "
              aria-label="Contact Us"
            >
              Contact Us
            </Button>
          </Card>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-6 ">
        {loading ? (
          <Skeleton className="bg-white w-full p-6">
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="w-full h-16" />

              <div className="flex gap-3">
                <Skeleton className="w-6 h-6" />
                <Skeleton className="w-6 h-6" />
              </div>
            </div>
          </Skeleton>
        ) : (
          <Card
            className="p-6 flex flex-col gap-4 cursor-pointer"
            onClick={() => setPostModal(true)}
          >
            <Card className="flex w-full items-center p-2 ">
              <Image
                src={dummyUser?.profileImg}
                alt={dummyUser?.name}
                width={50}
                height={50}
                className=""
              />

              <span className="text-[#515151] text-sm">
                Say what `&apos;` s in your mind
              </span>
            </Card>
            <div className="flex gap-3">
              <FirstAidKit size={22} className="cursor-pointer" />
              <Link size={22} className="cursor-pointer" />
            </div>
          </Card>
        )}

        <section className="w-full flex flex-col gap-2  ">
          {loading ? (
            <Card className="w-full p-6 rounded-2xl ">
              <Skeleton className="w-full rounded-2xl h-[500px] " />
            </Card>
          ) : (
            posts.map((post: any) => {
              return <PostCard key={post.id} post={post} />;
            })
          )}
        </section>
      </div>

      <div className="min-w-[300px] flex-col max-xl:hidden flex gap-6 sticky top-4 ">
        {loading ? (
          <CardSkeleton length={3} />
        ) : (
          <ArrayOfCards heading={"Suggested Jobs"} data={sugesstedJobs} />
        )}

        {loading ? (
          <CardSkeleton length={2} />
        ) : (
          <ArrayOfCards heading={"People You May Know"} data={peopleYouMayKnow}  />
        )}
      </div>
    </section>
  );
};

export default ProfileById;

