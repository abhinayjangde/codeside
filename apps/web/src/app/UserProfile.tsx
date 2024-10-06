import React from 'react';

// Mock Data as a constant
const USER_PROFILE_DATA = {
  username: "JohnDoe",
  profileImage:
    "https://www.w3schools.com/w3images/avatar2.png", // Placeholder image
  problemsSolved: 150,
  submissionAccuracy: 85.3,
  rank: 345,
  badges: ["JavaScript Master", "Top 10%"],
  recentActivity: [
    { title: "Solved Two Sum", status: "Solved", date: "2 days ago" },
    { title: "Solved Longest Substring Without Repeating Characters", status: "Solved", date: "1 week ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" }
  ],
  skills: [
    { topic: "Arrays", solved: 45 },
    { topic: "Dynamic Programming", solved: 20 },
    { topic: "Graphs", solved: 15 },
    { topic: "Strings", solved: 30 },
  ],
  languages: [
    { language: "JavaScript", solved: 60 },
    { language: "Python", solved: 50 },
    { language: "Java", solved: 30 },
    { language: "C++", solved: 10 },
  ],
};

const UserProfile: React.FC = () => {
  const { username, profileImage, problemsSolved, submissionAccuracy, rank, badges, recentActivity, skills, languages  } = USER_PROFILE_DATA;

  return (
    <div className="bg-gray-100  dark:bg-gray-900 min-h-screen p-6 ">
      {/* User Information Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{username}</h1>
          <p className="text-gray-600 dark:text-gray-300">Rank: #{rank}</p>
          </div>
        </div>
      </section>

       {/* Badges Section */}
       <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Badges</h2>
        <div className="flex flex-wrap gap-4">
          {badges.length > 0 ? (
            badges.map((badge, index) => (
              <BadgeCard key={index} badgeName={badge} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No badges earned yet.</p>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard label="Problems Solved" value={problemsSolved.toString()} />
          <StatCard label="Submission Accuracy" value={`${submissionAccuracy.toFixed(2)}%`} />
          <StatCard label="Global Rank" value={`#${rank}`} />
        </div>
      </section>

{/* Skills Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} topic={skill.topic} solved={skill.solved} />
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language, index) => (
            <LanguageCard key={index} language={language.language} solved={language.solved} />
          ))}
        </div>
      </section>

     

      {/* Recent Activity Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl dark:text-gray-100 font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity, index) => (
              <ActivityCard key={index} title={activity.title} status={activity.status} date={activity.date} />
            ))
          ) : (
            <p  className="text-gray-600 dark:text-gray-300">No recent activity.</p>
          )}
        </div>
      </section>
    </div>
  );
};

// Reusable component for showing stats
const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-100">{label}</h3>
    <p className="text-2xl font-semibold text-blue-500 dark:text-blue-400">{value}</p>
  </div>
  );
};

// Reusable component for skills
const SkillCard: React.FC<{ topic: string; solved: number }> = ({ topic, solved }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{topic}</h3>
      <p className="text-gray-600 dark:text-gray-300">{solved} problems solved</p>
    </div>
  );
};

// Reusable component for languages
const LanguageCard: React.FC<{ language: string; solved: number }> = ({ language, solved }) => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{language}</h3>
    <p className="text-gray-600 dark:text-gray-300">{solved} problems solved</p>
  </div>
  );
};

// Reusable component for badges
const BadgeCard: React.FC<{ badgeName: string }> = ({ badgeName }) => {
  return (
    <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-100 font-semibold py-2 px-4 rounded-lg">
    {badgeName}
  </div>
  );
};

// Reusable component for recent activity
const ActivityCard: React.FC<{ title: string; status: string; date: string }> = ({
  title,
  status,
  date,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  );
};

export default UserProfile;
