export const metadata = {
  title: 'Achievements',
};

import AchievementCard from '@/components/AchievementCard';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import achs from '../../../data/achievements.json';

export default function AchievementsPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-gray-950 text-white relative overflow-hidden">
      <BackgroundAnimation />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Achievements</h1>
        <p className="text-gray-300 mb-8">A list of achievements, awards, or recognitions.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achs.map((a) => (
            <AchievementCard key={a.id} a={a} />
          ))}
        </div>

        <div className="mt-10">
          <a href="/projects" className="inline-block bg-white text-gray-900 px-5 py-2.5 rounded-md font-semibold">Back to Projects</a>
        </div>
      </div>
    </main>
  );
}
