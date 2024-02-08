import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import AddToDatabase from "@/utils/AddToDatabase";

const AdminPanel = () => {
  // codes form admin console
  const [IMGimage, setIMGimage] = useState();
  const [IMGcategory, setIMGcategory] = useState("Winter");
  const [ARTimage, setARTimage] = useState();
  const [ARTtitle, setARTtitle] = useState();
  const [ARTdescription, setARTdescription] = useState();
  const [ARTotherimg, setARTotherimg] = useState();

  function handleSubmitIMG(e) {
    const sendForm = new FormData();
    sendForm.set("category", IMGcategory);
    sendForm.set("image", IMGimage);
    console.log({ sendForm });
    AddToDatabase(sendForm, "gallery");
  }
  function handleSubmitART(e) {
    const sendForm = new FormData();
    sendForm.set("title", ARTtitle);
    sendForm.set("coverImage", ARTimage);
    sendForm.set("description", ARTdescription);
    for (const i in ARTotherimg) {
      sendForm.set(`otherImage${i}`, ARTotherimg[i]);
    }
    AddToDatabase(sendForm, "article");
  }

  return (
    <div className={styles.AdminPanel}>
      <div className={styles.AdminGroup}>
        <h1>IMAGE Upload</h1>
        <div className={styles.OuterGroup}>
          <div className={styles.InnerGroup}>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={IMGcategory}
              onChange={(e) => setIMGcategory(e.target.value)}
            >
              {/* <option value="select category">select category</option> */}
              <option value="Winter">Winter</option>
              <option value="Ambience">Ambience</option>
              <option value="Golden Hour">Golden Hour</option>
            </select>
            {/* <input
              type="text"
              name="category"
              id="category"
              value={IMGcategory}
              onChange={(e) => setIMGcategory(e.target.value)}
            /> */}
            <label htmlFor="IMGimage">Cover Image</label>
            <input
              type="file"
              name="IMGimage"
              id="IMGimage"
              title="Uploaded Image"
              onChange={(e) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = (e) => {
                  const image = document.querySelector(".imageUploadIMG");
                  image.attributes.src.value = e.target.result;
                };
                setIMGimage(e.target.files[0]);
              }}
            />
            <button className="btn" onClick={handleSubmitIMG}>
              Create
            </button>
          </div>
          <img className="imageUploadIMG" src="" alt="" />
        </div>
      </div>

      <div className={styles.AdminGroup}>
        <h1>ARTICLE Upload</h1>
        <div className={styles.OuterGroup}>
          <div className={styles.InnerGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={ARTtitle}
              onChange={(e) => setARTtitle(e.target.value)}
            />
            <label htmlFor="ARTimage">Cover Image</label>
            <input
              type="file"
              name="ARTimage"
              id="ARTimage"
              title="Uploaded Image"
              onChange={(e) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = (e) => {
                  const image = document.querySelector(".imageUploadART");
                  image.attributes.src.value = e.target.result;
                };
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
            <label htmlFor="ARTotherimg">Other Images</label>
            <input
              type="file"
              name="ARTotherimg"
              id="ARTotherimg"
              multiple
              title="Uploaded Image"
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setARTotherimg(files);
                const imageBody = document.querySelector(
                  ".imageUploadARTOthers"
                );
                while (imageBody.firstChild) {
                  imageBody.removeChild(imageBody.lastChild);
                }
                files.forEach((file) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      const image = document.createElement("img");
                      image.src = reader.result;
                      imageBody.appendChild(image);
                    }
                  };
                  reader.readAsDataURL(file);
                });
              }}
            />
            <button className="btn" onClick={handleSubmitART}>
              Create
            </button>
          </div>
          <img className="imageUploadART" src="" alt="" />
        </div>
        <div
          className={`imageUploadARTOthers ${styles.imageUploadARTOthers}`}
          id="imageUploadARTOthers"
        ></div>
      </div>
    </div>
  );
};

export default AdminPanel;
