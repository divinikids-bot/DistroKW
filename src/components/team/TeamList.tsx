"use client";

import React from "react";
import useTeamMembers from "@/components/team/useTeamMember";
import TeamCard from "./TeamCard";

export default function TeamList() {
  const { users, loading } = useTeamMembers(6);

  if (loading) {
    return <p className="text-center">Loading team members...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {users.map((user, index) => (
        <TeamCard
          key={index}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
          phone={user.phone}
          picture={user.picture.large}
        />
      ))}
    </div>
  );
}
