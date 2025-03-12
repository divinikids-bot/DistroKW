import TeamList from "@/components/team/TeamList";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>
      <TeamList /> {/* Import Client Component */}
    </div>
  );
}
