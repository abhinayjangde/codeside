import React from 'react';
import Link from 'next/link';

// Define types for contests
interface Contest {
  id: string;
  title: string;
  startDate: string;
  duration: string;
}

const contestData: Contest[] = [
  { id: '1', title: 'CodeChef Monthly Challenge', startDate: '2024-11-25T10:00:00', duration: '48' },
  { id: '2', title: 'Beginner Blitz', startDate: '2024-12-05T15:00:00', duration: '2' },
  { id: '3', title: 'Advanced Algorithms Showdown', startDate: '2024-12-15T08:00:00', duration: '3' },
  { id: '4', title: 'Past Coding Challenge', startDate: '2024-10-20T10:00:00', duration: '5' },
];

const getTimeRemaining = (startDate: string): string => {
  const start = new Date(startDate).getTime();
  const now = Date.now();
  const diff = start - now;

  if (diff <= 0) return "Started";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
};

const ContestsPage: React.FC = () => {
  const upcomingContests = contestData.filter(
    (contest) => new Date(contest.startDate) >= new Date()
  );

  const pastContests = contestData.filter(
    (contest) => new Date(contest.startDate) < new Date()
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center uppercase mb-8">Coding Contests</h1>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Upcoming Contests</h2>
          {upcomingContests.length > 0 ? (
            <ContestTable contests={upcomingContests} showTimeRemaining />
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No upcoming contests available.</p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Past Contests</h2>
          {pastContests.length > 0 ? (
            <ContestTable contests={pastContests} showTimeRemaining={false} />
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No past contests available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

interface ContestTableProps {
  contests: Contest[];
  showTimeRemaining: boolean;
}

const ContestTable: React.FC<ContestTableProps> = ({ contests, showTimeRemaining }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Contest Name</th>
            <th className="py-2 px-4 text-left">Start Date & Time</th>
            {showTimeRemaining && <th className="py-2 px-4 text-left">Starts In</th>}
            <th className="py-2 px-4 text-left">Duration (hrs)</th>
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {contests.map((contest) => (
            <tr key={contest.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2 px-4">{contest.id}</td>
              <td className="py-2 px-4">{contest.title}</td>
              <td className="py-2 px-4">{new Date(contest.startDate).toLocaleString()}</td>
              {showTimeRemaining && (
                <td className="py-2 px-4">{getTimeRemaining(contest.startDate)}</td>
              )}
              <td className="py-2 px-4">{contest.duration}</td>
              <td className="py-2 px-4 text-center">
                <Link
                  href={`/contests/${contest.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {showTimeRemaining ? "Join Contest" : "View Details"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContestsPage;
