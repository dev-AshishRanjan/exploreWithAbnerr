import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import AddToDatabase from "@/utils/AddToDatabase";

const AdminPanel = () => {
  // codes form admin console
  const [IMGimage, setIMGimage] = useState();
  const [IMGcategory, setIMGcategory] = useState();
  const [ARTimage, setARTimage] = useState();
  const [ARTtitle, setARTtitle] = useState();
  const [ARTdescription, setARTdescription] = useState();

  function handleSubmitIMG(e) {
    const sendForm = new FormData();
    sendForm.set("category", IMGcategory);
    sendForm.set("image", IMGimage);
    const members = AddToDatabase(sendForm, "image");
  }
  function handleSubmitART(e) {
    const sendForm = new FormData();
    sendForm.set("title", ARTtitle);
    sendForm.set("image", ARTimage);
    sendForm.set("description", ARTdescription);
    const members = AddToDatabase(sendForm, "article");
  }

  console.log({ styles });

  return (
    <div className={styles.AdminPanel}>
      <div className={styles.AdminGroup}>
        <h1>IMAGE Upload</h1>
        <div className={styles.InnerGroup}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={IMGcategory}
            onChange={(e) => setIMGcategory(e.target.value)}
          />
          <label htmlFor="IMGimage">Image</label>
          <input
            type="file"
            name="IMGimage"
            id="IMGimage"
            title="Uploaded Image"
            onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              console.log({ reader });
              reader.addEventListener("load", (e) => {
                const image = document.querySelector(".imageUploadIMG");
                // console.log({image});
                image.attributes.src.value = e.target.result;
              });
              setIMGimage(e.target.files[0]);
            }}
          />
          <button className="btn" onClick={handleSubmitIMG}>
            Create
          </button>
        </div>
        <img className="imageUploadIMG" src="" alt="" />
      </div>

      <div className={styles.AdminGroup}>
        <h1>ARTICLE Upload</h1>
        <div className={styles.InnerGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={ARTtitle}
            onChange={(e) => setARTtitle(e.target.value)}
          />
          <label htmlFor="ARTimage">Image</label>
          <input
            type="file"
            name="ARTimage"
            id="ARTimage"
            title="Uploaded Image"
            onChange={(e) => {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              console.log({ reader });
              reader.addEventListener("load", (e) => {
                const image = document.querySelector(".imageUploadART");
                image.attributes.src.value = e.target.result;
              });
              setARTimage(e.target.files[0]);
            }}
          />
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="10"
            name="description"
            id="description"
            value={ARTdescription}
            onChange={(e) => setARTdescription(e.target.value)}
          />
          <button className="btn" onClick={handleSubmitART}>
            Create
          </button>
        </div>
        <img className="imageUploadART" src="" alt="" />
      </div>
    </div>
  );
};

export default AdminPanel;
