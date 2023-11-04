import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

const AdminPanel = () => {
  const [portraits, setPortraits] = useState();
  const [adventure, setAdventure] = useState();
  useEffect(() => {
    fetch("/gallery/portraits")
      .then((req) => req.json())
      .then((res) => {
        setPortraits(JSON.stringify(res.data));
      });
    fetch("/gallery/adventure")
      .then((req) => req.json())
      .then((res) => {
        setAdventure(JSON.stringify(res.data));
      });
  }, []);
  const handlePortraitSubmit = (e) => {
    e.preventDefault();
    fetch(`/gallery/portraits`, {
      method: "POST",
      body: JSON.stringify({ portraits }),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          alert("Success!");
        }
      });
  };
  const handleAdventureSubmit = (e) => {
    e.preventDefault();
    fetch(`/gallery/adventure`, {
      method: "POST",
      body: JSON.stringify({ adventure }),
    })
      .then((req) => req.json())
      .then((res) => {
        console.log({ res });
        if (res.status === 200) {
          alert("Success!");
        }
      });
  };

  return (
    <div className={styles.AdminPanel}>
      <div className={styles.group}>
        <h2>Portraits</h2>
        <textarea
          name="skills"
          id="skills"
          cols="30"
          rows="10"
          value={skills}
          onChange={(e) => setPortraits(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handlePortraitSubmit}>
          submit
        </button>
      </div>
      <div className={styles.group}>
        <h2>Adventure</h2>
        <textarea
          name="projects"
          id="projects"
          cols="30"
          rows="20"
          value={project}
          onChange={(e) => setAdventure(e.target.value)}
        ></textarea>
        <button type="submit" className="btn" onClick={handleAdventureSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
