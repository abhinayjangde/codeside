import React from "react";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Mock Data as a constant
const USER_PROFILE_DATA = {
  username: "JohnDoe",
  profileImage: "https://www.w3schools.com/w3images/avatar2.png",
  problemsSolved: 150,
  submissionAccuracy: 85.3,
  rank: 345,
  badges: ["JavaScript Master", "Top 10%"],
  recentActivity: [
    { title: "Solved Two Sum", status: "Solved", date: "2 days ago" },
    { title: "Solved Longest Substring Without Repeating Characters", status: "Solved", date: "1 week ago" },
    { title: "Solved Word Ladder", status: "Solved", date: "2 weeks ago" }
  ],
  skills: [
    { topic: "Arrays", solved: 45 },
    { topic: "Dynamic Programming", solved: 20 },
    { topic: "Graphs", solved: 15 },
    { topic: "Strings", solved: 30 }
  ],
  languages: [
    { language: "JavaScript", solved: 60 },
    { language: "Python", solved: 50 },
    { language: "Java", solved: 30 },
    { language: "C++", solved: 10 }
  ],
};

const UserProfile: React.FC = () => {
  const {
    username,
    profileImage,
    problemsSolved,
    submissionAccuracy,
    rank,
    badges,
    recentActivity,
    skills,
    languages,
  } = USER_PROFILE_DATA;

 
  return (
    <div className="dark:bg-dark py-5 bg-gray-50 p-4">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
      <div className="max-w-screen-lg mx-auto bg-white dark:text-white dark:bg-black/[0.3] rounded-lg shadow-md p-6 lg:p-10">
        {/* User Information Section */}
        <section className="p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center">
            <Image src={profileImage} alt="Profile" width={96} height={96} className="rounded-full mr-6" />
            <div>
              <h1 className="text-2xl font-bold">
                {username}
              </h1>
              <p>Rank: #{rank}</p>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-4">
            {badges.length > 0 ? (
              badges.map((badge, index) => (
                <BadgeCard key={index} badgeName={badge} />
              ))
            ) : (
              <p>No badges earned yet.</p>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Problems Solved" value={problemsSolved.toString()} />
            <StatCard label="Submission Accuracy" value={`${submissionAccuracy.toFixed(2)}%`} />
            <StatCard label="Global Rank" value={`#${rank}`} />
          </div>
        </section>

        {/* Skills Section */}
        <section className="p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} topic={skill.topic} solved={skill.solved} />
            ))}
          </div>
        </section>

        {/* Languages Section */}
        <section className="p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language.language} solved={language.solved} />
            ))}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <ActivityCard
                  key={index}
                  title={activity.title}
                  status={activity.status}
                  date={activity.date}
                />
              ))
            ) : (
              <p>No recent activity.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-4 bg-gray-50 dark:bg-black/[0.3] rounded-lg shadow-md text-center">
    <h3 className="text-lg font-bold">{label}</h3>
    <p className="text-2xl font-semibold text-blue-500">{value}</p>
  </div>
);

const SkillCard: React.FC<{ topic: string; solved: number }> = ({ topic, solved }) => (
  <div className="p-4 bg-gray-50 dark:bg-black/[0.3] rounded-lg shadow-md">
    <h3 className="text-lg font-bold">{topic}</h3>
    <p>{solved} problems solved</p>
  </div>
);

const LanguageCard: React.FC<{ language: string; solved: number }> = ({ language, solved }) => (
  <div className="p-4 bg-gray-50 dark:bg-black/[0.3] rounded-lg shadow-md">
    <h3 className="text-lg font-bold">{language}</h3>
    <p>{solved} problems solved</p>
  </div>
);

const BadgeCard: React.FC<{ badgeName: string }> = ({ badgeName }) => (
  <div className="flex items-center justify-center bg-gray-200 dark:bg-black/[0.3] py-2 px-4 rounded-lg">
    {badgeName}
  </div>
);

const ActivityCard: React.FC<{ title: string; status: string; date: string }> = ({ title, status, date }) => (
  <div className="bg-gray-50 dark:bg-black/[0.3] p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{status}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
);

export default UserProfile;
