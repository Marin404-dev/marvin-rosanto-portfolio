import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

function getActivityLevel(count, maximum) {
  if (!count || !maximum) return 0;
  const ratio = count / maximum;
  if (ratio <= 0.2) return 1;
  if (ratio <= 0.45) return 2;
  if (ratio <= 0.7) return 3;
  return 4;
}

function ActivityGrid({ calendar }) {
  const maximum = useMemo(
    () => Math.max(...calendar.weeks.flatMap((week) => week.contributionDays.map((day) => day.contributionCount)), 1),
    [calendar],
  );

  return (
    <div className="activity-scroll" aria-label="GitHub contributions over the last year">
      <div className="activity-grid">
        {calendar.weeks.map((week, weekIndex) => (
          <div key={`${week.firstDay}-${weekIndex}`} className="activity-week">
            {week.contributionDays.map((day) => {
              const level = getActivityLevel(day.contributionCount, maximum);
              return (
                <span
                  key={day.date}
                  className={`activity-cell activity-level-${level}`}
                  title={`${day.contributionCount} contribution${day.contributionCount === 1 ? '' : 's'} on ${day.date}`}
                  aria-label={`${day.contributionCount} contribution${day.contributionCount === 1 ? '' : 's'} on ${day.date}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GithubActivity() {
  const [calendar, setCalendar] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isActive = true;

    fetch('/api/github-contributions')
      .then((response) => {
        if (!response.ok) throw new Error('GitHub activity unavailable');
        return response.json();
      })
      .then((data) => {
        if (isActive) setCalendar(data);
      })
      .catch(() => {
        if (isActive) setError(true);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <section className="editorial-section github-section" aria-labelledby="github-activity-title">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="github-heading-row">
            <div className="github-heading-copy">
              <div className="github-heading-label">
                <span className="github-heading-mark" aria-hidden="true" />
                <p className="eyebrow mb-0">GitHub / Activity</p>
              </div>
              <h2 id="github-activity-title" className="github-heading-title">A year in code.</h2>
            </div>
            <a href="https://github.com/Marin404-dev" target="_blank" rel="noopener noreferrer" className="github-link">
              <Github size={15} aria-hidden="true" /> View GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="github-activity-minimal">
            {calendar && <ActivityGrid calendar={calendar} />}
            {!calendar && !error && <p className="github-status">Loading GitHub activity...</p>}
            {!calendar && error && <p className="github-status">GitHub activity will appear here once the portfolio API is connected.</p>}

            {calendar && (
              <div className="github-activity-meta">
                <span>{calendar.totalContributions} contributions / past 12 months</span>
                <div className="github-legend" aria-label="Contribution intensity legend">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => <span key={level} className={`activity-cell activity-level-${level}`} aria-hidden="true" />)}
                  <span>More</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
