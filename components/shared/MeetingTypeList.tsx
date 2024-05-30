"use client";

import Image from "next/image";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

export default function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        color="bg-orange-1"
        image="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start a new meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        color="bg-blue-1"
        image="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        color="bg-purple-1"
        image="/icons/recordings.svg"
        title="View Recordings"
        description="Checkout your recordings"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        color="bg-yellow-1"
        image="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}
