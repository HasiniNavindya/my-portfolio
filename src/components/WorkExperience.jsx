"use client";

export default function WorkExperience() {
  return (
    <section id="work" className="py-12 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Work Experience</h2>

        {/* Centered single card matching Education design */}
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-6 mx-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 -mt-2">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                    <img
                      src="smib.png"
                      alt="SMIB logo"
                      className="w-full h-full object-contain p-2 bg-transparent"
                      onError={(e) => {
                        // fallback to a generic file icon in public/
                        e.currentTarget.src = '/file.svg';
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">Former Trainee</h3>
                  <div className="text-sm text-primary mt-1 font-medium">State Mortgage &amp; Investment Bank (SMIB) — Full Time</div>
                  <div className="text-xs text-gray-400 mt-2"> 2021 –  2022</div>

                  <div className="mt-4 pl-4 border-l-2 border-gray-700/30 space-y-3">
                    <p className="text-sm text-gray-300">Badulla, Uva Province, Sri Lanka</p>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Description:</h4>
                      <p className="text-sm text-gray-300 mt-2">
                        At SMIB, I got hands-on experience with day-to-day banking operations. I worked closely with customers,
                        assisting them with inquiries and account-related tasks.
                      </p>
                      <p className="text-sm text-gray-300 mt-2">
                        This role also helped me understand transaction
                        processing and internal workflows, while improving my teamwork, communication, and problem-solving skills in a
                        professional setting.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3 items-center">
                    <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs border border-white/20 bg-transparent text-white">
                      <span className="w-2 h-2 rounded-full block bg-red-500" />
                      <span>Completed</span>
                    </span>
                    <span className="px-3 py-1 bg-gray-800/60 text-sm rounded-lg"> 2021 –  2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
