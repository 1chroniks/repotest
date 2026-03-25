import { teamMembers } from '../data/team';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">The People Behind the Lens</span>
          <h1 className="section-title mt-3 mb-6">Meet the Team</h1>
          <p className="section-subtitle mx-auto">
            LensForge is built by photographers, engineers, and dreamers who share one obsession: creating tools that help you capture the world as only you can see it.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card p-8 flex flex-col items-center text-center hover:border-primary-500/20 transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 ring-2 ring-white/10 group-hover:ring-primary-500/30 transition-all">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary-500 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 hover:text-primary-500 text-white/40 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 hover:text-primary-500 text-white/40 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
