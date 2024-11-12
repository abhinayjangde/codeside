import Link from 'next/link';
import React from 'react';

// Mock contest data - typically fetched from an API
const contestData = [
  { id: '1', title: 'CodeChef Monthly Challenge', startDate: '2024-11-25T10:00:00', duration: '48' },
  { id: '2', title: 'Beginner Blitz', startDate: '2024-12-05T15:00:00', duration: '2' },
  { id: '3', title: 'Advanced Algorithms Showdown', startDate: '2024-12-15T08:00:00', duration: '3' },
  { id: '4', title: 'Past Coding Challenge', startDate: '2024-10-20T10:00:00', duration: '5' },
];

// Get time remaining until start
const getTimeRemaining = (startDate:  any) => {
  const start:any = new Date(startDate);
  const now:any = new Date();
  const diff:any = start - now;

  if (diff <= 0) return "Started";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
};

// Separate upcoming and past contests
const getUpcomingContests = () => {
  const currentDate = new Date();
  return contestData.filter(contest => new Date(contest.startDate) >= currentDate);
};

const getPastContests = () => {
  const currentDate = new Date();
  return contestData.filter(contest => new Date(contest.startDate) < currentDate);
};

const ContestsPage: React.FC = () => {
  const upcomingContests = getUpcomingContests();
  const pastContests = getPastContests();

  return (
    <section className="bg-white dark:bg-dark md:m-0 py-10 md:py-20">
      <div className="mx-auto px-4 md:px-6 flex flex-col justify-center items-center gap-8">
        
        {/* Main Heading */}
        <h1 className="text-4xl uppercase md:text-5xl font-bold mb-8">Contests</h1>
        
        {/* Upcoming Contests Section */}
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">Upcoming Contests</h2>
          {upcomingContests.length > 0 ? (
            <div className="overflow-x-auto shadow-lg rounded-lg mb-10">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">ID</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Contest Name</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Start Date & Time</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Starts In</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Duration (hrs)</th>
                    <th className="py-3 px-4 text-center text-gray-700 dark:text-gray-300 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingContests.map((contest) => (
                    <tr key={contest.id} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-200">{contest.id}</td>
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-200">{contest.title}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {new Date(contest.startDate).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{getTimeRemaining(contest.startDate)}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{contest.duration}</td>
                      <td className="py-3 px-4 text-center">
                        <Link href={`/contests/${contest.id}`} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                          Join Contest
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-center mt-6">No upcoming contests at the moment.</p>
          )}
        </div>

        {/* Past Contests Section */}
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">Past Contests</h2>
          {pastContests.length > 0 ? (
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">ID</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Contest Name</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Start Date & Time</th>
                    <th className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 font-semibold">Duration (hrs)</th>
                    <th className="py-3 px-4 text-center text-gray-700 dark:text-gray-300 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pastContests.map((contest) => (
                    <tr key={contest.id} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-200">{contest.id}</td>
                      <td className="py-3 px-4 text-gray-900 dark:text-gray-200">{contest.title}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {new Date(contest.startDate).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{contest.duration}</td>
                      <td className="py-3 px-4 text-center">
                        <Link href={`/contests/${contest.id}`}  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                          View Contest
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-center mt-6">No past contests available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContestsPage;
