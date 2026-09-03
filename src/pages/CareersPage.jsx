import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Briefcase, Clock, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { JOBS_DATA } from '../data/jobs';

export const CareersPage = () => {
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Operations', 'Customer Experience'];

  const filteredJobs = selectedDept === 'All'
    ? JOBS_DATA
    : JOBS_DATA.filter((j) => j.department === selectedDept);

  return (
    <>
      <SEO
        title="Careers — Build the Future with Us"
        description="Join our product, engineering, operations, and design squads as we redefine everyday urban services."
      />

      <main className="pt-32 sm:pt-40 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={[{ label: 'Careers' }]} />

          {/* Hero */}
          <div className="max-w-4xl space-y-6 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-border text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Join the Team
            </span>

            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-primary tracking-tighter uppercase leading-[0.98]">
              BUILD THE FUTURE <br />
              <span className="text-muted">WITH US.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted font-normal max-w-2xl leading-relaxed">
              We are assembling a high-caliber team of technologists, systems designers, and city operators to make everyday life frictionless for millions.
            </p>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    selectedDept === dept
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-muted hover:text-primary border border-border'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Matrix */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.slug}
                to={`/careers/${job.slug}`}
                className="group block bg-white rounded-3xl p-6 sm:p-8 border border-border hover:border-primary transition-all duration-300 shadow-subtle hover:shadow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 bg-accent/25 text-primary rounded-full">
                        {job.department}
                      </span>
                      <span className="text-xs font-mono text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </span>
                      <span className="text-xs font-mono text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{job.type}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-primary group-hover:text-black tracking-tight">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted line-clamp-2">
                      {job.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end justify-between pt-2 sm:pt-0">
                    <span className="text-xs font-mono font-bold text-primary">
                      {job.salary}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  );
};
