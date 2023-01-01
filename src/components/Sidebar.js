import React, { useState } from "react";
import "../components/index.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { NavLink } from "react-router-dom";

const menuItem = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },

  {
    name: "Shorts",
    path: "shorts",
    icon: <BoltIcon />,
  },
  {
    name: "Subscription",
    path: "subscription",
    icon: <SubscriptionsIcon />,
  },
  {
    name: "Library",
    path: "library",
    icon: <VideoLibraryIcon />,
  },
  {
    name: "History",
    path: "history",
    icon: <HistoryIcon />,
  },
  {
    name: "Videos",
    path: "Videos",
    icon: <OndemandVideoIcon />,
  },
  {
    name: "Later",
    path: "Later",
    icon: <WatchLaterIcon />,
  },
  {
    name: "Videos",
    path: "liked",
    icon: <ThumbUpIcon />,
  },
];

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div
          className="header-toggle"
          onClick={() => {
            setShow(!show);
          }}
        ></div>
        <h2
          onClick={() => {
            setShow(!show);
          }}
        >
          <i class=" arrow fa-solid fa-bars"></i>
        </h2>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <Link className="nav-logo">
            <i
              onClick={() => {
                setShow(!show);
              }}
              className={`fas fa-bars ${show ? "" : null}`}
            ></i>
          </Link>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              active="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{
                  display: isOpen ? "block" : "none",
                }}
                className="link_text"
              >
                <p className="names">{item.name}</p>
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>
    </main>
  );
};

export default Sidebar;
