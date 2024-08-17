import { IPost } from '@/lib/types';
import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';

const PostCard = ({ post, user }: { post: IPost; user: User | null }) => {
  const givenDate = new Date(post.createdAt).getTime();
  const now = new Date().getTime();

  // Calculate the difference in milliseconds
  const differenceInMs = now - givenDate;

  const millisecondsInMinute = 1000 * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInWeek = millisecondsInDay * 7;
  const millisecondsInYear = millisecondsInDay * 365; // Approximation

  const differenceInYears = Math.floor(differenceInMs / millisecondsInYear);
  const differenceInWeeks = Math.floor(differenceInMs / millisecondsInWeek);
  const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);
  const differenceInHours = Math.floor(differenceInMs / millisecondsInHour);
  const differenceInMinutes = Math.floor(differenceInMs / millisecondsInMinute);

  let timeAgo;

  if (differenceInYears > 0) {
    timeAgo = `${differenceInYears} year(s) ago`;
  } else if (differenceInWeeks > 0) {
    timeAgo = `${differenceInWeeks} week(s) ago`;
  } else if (differenceInDays > 0) {
    timeAgo = `${differenceInDays} day(s) ago`;
  } else if (differenceInHours > 0) {
    timeAgo = `${differenceInHours} hour(s) ago`;
  } else {
    timeAgo = `${differenceInMinutes} minute(s) ago`;
  }
  return (
    <div className="flex flex-col items-start w-2/3 mx-auto relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={user!.imageUrl}
            alt={user!.fullName!}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h2 className="text-xs md:text-sm text-start">{user!.username}</h2>
        </div>
        <p className="text-xs md:text-sm text-slate-500">{timeAgo}</p>
      </div>
      <div className="p-3">
        <p className="text-slate-200 text-base">{post.title}</p>
      </div>
    </div>
  );
};

export default PostCard;
