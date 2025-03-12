import { useState, useEffect } from "react";

export default function useTeamMembers(results: number = 6) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`https://randomuser.me/api/?results=${results}`);
        const data = await res.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [results]);

  return { users, loading };
}
