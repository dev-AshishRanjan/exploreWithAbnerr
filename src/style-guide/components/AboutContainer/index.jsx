import React from "react";
import styles from "./style.module.scss";
import AboutOutdoor from "../AboutOutdoor";
import LovingMemory from "../LovingMemory";

const AboutContainer = () => {
  return (
    <>
      <div className={styles.AboutContainer}>
        <div className={styles.dvanga}>
          <div className={styles.dvangaimg}>
            <span>DVANGA</span>
          </div>
          <p>
            "Greetings ,before I begin I would like to show our deepest
            GRATITUDE and THANKS to everyone who has been with us witnessing our
            photographic journey right from the start of 2021. It is very
            encouraging to the both of us to have your feedback and appreciation
            towards our photos. My name is Debanga Hazarika and as you all know
            I go by the username DVANGA 👋. I am a Lifestyle Photographer but
            Unlike Seth's my work is mostly based on a Freelance scale with
            opportunities arriving on an untimely basis from remote brands in
            the country of India. I am still pursuing my Undergraduate journey
            which means unless there is a Workshop or a Project, I can only
            affort to travel and shoot during Vacations."
          </p>
        </div>
        <div className={styles.seth}>
          <div className={styles.sethimg}>
            <span>SETH</span>
          </div>
          <p>
            " Hailing all the way from Tasmania (South Australia) Hello, I am
            your man Seth 'Elijah' Abner. Ever since my early teenage years I
            have always had a keen eye of seeing things from a different
            persective and thats when I got myself a camera and started taking
            pictures of the environment around me. I believe Life is like a
            camera. Just focus on what’s important and capture the good times,
            develop from the negatives, and if things don’t work out, just take
            another shot. I am a BSAg Graduate and I ocassionally work as a part
            time wedding photographer here in the Gold Coast.
            <br />
            <br />
            They say you often stumble upon your best buddies while pursuing a
            similiar line of work. And rightly so in the year 2021 while on a
            vacation to the state of Jammu Kashmir,India I met one of my
            best"est" ever friends and my 'Partner In Co' Debanga (Dvanga). His
            approach towards photography was very similiar to that of mine ,
            shooting to create stories of the people we have met and capturing
            every little detailed moments throughout the journey. As they its
            all about the Journey, not the Destination. Along with his talents
            in post processing, I must say that We all felt very lively with the
            level of excitement and positive energy he brought along with him.
            Lastly I want to say this has only been a start and I do sincerely
            believe this is the start of something beautiful. We are extremely
            proud with the community we have built and both of us with be
            sharing lots of meaningful stories in the coming days. Cheers 🥂 "
          </p>
        </div>
      </div>
      <LovingMemory />
      <AboutOutdoor />
    </>
  );
};

export default AboutContainer;
