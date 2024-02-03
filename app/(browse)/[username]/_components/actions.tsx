"use client";

import { useTransition } from "react";

import { onFollow, onUnfollow } from "@/actions/follow";
import { onBlock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wront."));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(
            `You have unfollowing the user ${data.following.username}`
          )
        )
        .catch(() => toast.error("Something went wront."));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`Blocked the ${data.blocked.username}.`))
        .catch(() => toast.error("Something went wrong."));
    });
  };

  return (
    <>
      <Button disabled={isPending} onClick={onClick} variant="primary">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button disabled={isPending} onClick={handleBlock}>Block</Button>
    </>
  );
};
