import React from "react";
import { createRoot } from "react-dom/client";
import {
  Bell,
  Bookmark,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Clapperboard,
  History,
  Home,
  Menu,
  Mic,
  Play,
  PlaySquare,
  Scale,
  Search,
  Share2,
  ThumbsUp,
  UserRound,
} from "lucide-react";
import "./styles.css";
import banner from "./assets/brief-authority-banner.png";
import thumbnails from "./assets/brief-authority-thumbnails.png";

const videos = [
  {
    title: "The Movie Trial That Would Fall Apart In Five Minutes",
    views: "1.4M views",
    age: "2 days ago",
    duration: "18:42",
    tag: "Pop culture law",
    topic: "OBJECTION",
    position: "0% 0%",
  },
  {
    title: "What The Supreme Court Actually Decided This Week",
    views: "918K views",
    age: "5 days ago",
    duration: "22:09",
    tag: "Civics",
    topic: "SCOTUS",
    position: "33% 0%",
  },
  {
    title: "The Contract Clause Everyone Skips Until It Costs Them",
    views: "642K views",
    age: "8 days ago",
    duration: "16:15",
    tag: "Contracts",
    topic: "CONTRACTS",
    position: "66% 0%",
  },
  {
    title: "Can A Website Really Sell Your Private Data?",
    views: "1.1M views",
    age: "12 days ago",
    duration: "20:31",
    tag: "Internet law",
    topic: "PRIVACY",
    position: "100% 0%",
  },
  {
    title: "Defamation, Fair Use, And The Internet Argument Machine",
    views: "487K views",
    age: "2 weeks ago",
    duration: "24:18",
    tag: "Media law",
    topic: "FAIR USE",
    position: "12% 100%",
  },
  {
    title: "Every Bad Police Interrogation Scene, Ranked By Legality",
    views: "2.2M views",
    age: "3 weeks ago",
    duration: "28:04",
    tag: "Criminal law",
    topic: "MIRANDA",
    position: "88% 100%",
  },
];

const navItems = [
  ["Home", Home],
  ["Briefs", PlaySquare],
  ["Case Files", BriefcaseBusiness],
  ["History", History],
  ["Watch Later", Clock3],
];

const playlists = ["Trial Breakdowns", "Real Lawyer Reacts", "Rights Explained", "Contracts 101"];

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Primary">
        <button className="icon-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
        <div className="brand-mark">
          <Scale size={24} />
          <span>StreamBench</span>
        </div>
        <nav>
          {navItems.map(([label, Icon]) => (
            <a className={label === "Home" ? "active" : ""} href="#" key={label}>
              <Icon size={19} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="search-box">
            <Search size={19} />
            <input aria-label="Search" placeholder="Search Brief Authority" />
            <button className="mic-button" aria-label="Voice search">
              <Mic size={18} />
            </button>
          </div>
          <button className="icon-button" aria-label="Notifications">
            <Bell size={21} />
          </button>
          <button className="profile-button" aria-label="Account">
            <UserRound size={19} />
          </button>
        </header>

        <section className="channel">
          <div className="banner">
            <img src={banner} alt="Brief Authority channel banner" />
          </div>

          <div className="channel-header">
            <div className="avatar" aria-hidden="true">
              <Scale size={34} />
            </div>
            <div className="channel-copy">
              <h1>Brief Authority</h1>
              <p>@BriefAuthority · 2.1M subscribers · 286 videos</p>
              <p className="summary">Sharp legal breakdowns of cases, culture, contracts, and courtroom chaos.</p>
            </div>
            <div className="actions">
              <button className="secondary-action">
                <Share2 size={17} />
                Share
              </button>
              <button className="primary-action">Subscribe</button>
            </div>
          </div>

          <div className="tabs" role="tablist" aria-label="Channel sections">
            {["Home", "Videos", "Briefs", "Playlists", "Community"].map((tab) => (
              <button className={tab === "Home" ? "selected" : ""} role="tab" key={tab}>
                {tab}
              </button>
            ))}
          </div>
        </section>

        <section className="featured">
          <div className="featured-media">
            <img src={thumbnails} alt="Legal commentary thumbnail collage" />
            <button aria-label="Play featured video">
              <Play fill="currentColor" size={28} />
            </button>
          </div>
          <div className="featured-copy">
            <span className="eyebrow">Featured brief</span>
            <h2>The Legal Mistake That Changes The Whole Movie</h2>
            <p>
              A tight, evidence-board style breakdown of the courtroom scene everyone quotes and the rule that would
              actually decide it.
            </p>
            <div className="featured-stats">
              <span>3.8M views</span>
              <span>Premiered yesterday</span>
            </div>
            <button className="watch-button">
              <Clapperboard size={18} />
              Watch now
            </button>
          </div>
        </section>

        <section className="content-grid">
          <div className="section-heading">
            <h2>Latest videos</h2>
            <button>
              Sort
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <article className="video-card" key={video.title}>
                <div className="thumb" style={{ backgroundImage: `url(${thumbnails})`, backgroundPosition: video.position }}>
                  <span className="topic">{video.topic}</span>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-body">
                  <h3>{video.title}</h3>
                  <p>{video.tag}</p>
                  <span>
                    {video.views} · {video.age}
                  </span>
                  <div className="quick-actions">
                    <button aria-label={`Like ${video.title}`}>
                      <ThumbsUp size={16} />
                    </button>
                    <button aria-label={`Save ${video.title}`}>
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="playlist-row">
          <div className="section-heading">
            <h2>Playlists</h2>
            <button>View all</button>
          </div>
          <div className="playlist-grid">
            {playlists.map((playlist, index) => (
              <article className="playlist-card" key={playlist}>
                <div className="playlist-stack" style={{ backgroundImage: `url(${thumbnails})`, backgroundPosition: `${index * 28}% 50%` }} />
                <h3>{playlist}</h3>
                <p>{24 - index * 3} videos</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
