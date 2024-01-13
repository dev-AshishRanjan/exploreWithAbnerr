import React from "react";
import styles from "./style.module.scss";

const Welcome = () => {
  return (
    <>
      <div className={styles.welcomepara}>
        <p className={styles.heading}>WELCOME !</p>
        <p>
          Step into a realm where moments are frozen in time, emotions are
          immortalized, and stories unfold through the lens of our cameras. We
          are thrilled to have all of you here, exploring the visual art We've
          woven with passion and creativity.
          {/* </p>
        <p> */}
          Photography, to us, is more than just a click of the shutter; it's a
          celebration of life, a dance with light, and a journey into the heart
          of human experiences. Each image tells a unique tale, and We are
          delighted to share these visual narratives with you.
          {/* </p>
          <p> */}
          We invite you to wander through the galleries that showcase a diverse
          spectrum of my work. This platform serves as a window into our vision,
          and We hope you find joy, inspiration, and a sense of connection
          within these images.
          {/* </p>
          <p> */}
          Your presence here adds depth and meaning to the art we create. We
          look forward to sharing more moments, more stories, and more beauty
          with you as we embark on this photographic journey together.
        </p>
        <br />
        <p>Warm Regards,</p>
        <p>Seth and Dvanga</p>
      </div>
      <div className={styles.welcomeimg}></div>
    </>
  );
};

export default Welcome;
