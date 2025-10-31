export const metadata = {
  title: 'Certifications',
};

import CertificationCard from '@/components/CertificationCard';
import certs from '../../../data/certifications.json';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function CertificationsPage() {
  return (
    <main className="relative min-h-screen py-24 px-6 bg-gray-950 text-white">
      <BackgroundAnimation />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h1>
        <p className="text-gray-300 mb-8">Below are my certifications — click View to open the certificate or reference.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <CertificationCard key={c.id} cert={c} />
          ))}
        </div>

        <div className="mt-10">
          <a href="/projects" className="inline-block bg-white text-gray-900 px-5 py-2.5 rounded-md font-semibold">Back to Projects</a>
        </div>
      </div>
    </main>
  );
}
