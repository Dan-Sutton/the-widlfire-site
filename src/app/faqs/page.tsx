"use client";
import Navbar from "@/components/navbar/navbar";
import styles from "./faqs.module.css";
import FaqItem from "@/components/faqItem/FaqItem";

export default function Faqs() {
  return (
    <div className={styles.faqs}>
      <Navbar />

      <section className={styles.info}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Hopefully your question gets answered here, otherwise please don’t
          hesitate to get in <b>CONTACT</b> with us.
        </p>

        <FaqItem
          question={"HOW LONG DO YOU PLAY FOR?"}
          description={
            "Two sets equating to 2:15 hours, with a break in the middle."
          }
        />
        <FaqItem
          question={"HOW LONG DO YOU PLAY FOR?"}
          description={
            "Two sets equating to 2:15 hours, with a break in the middle."
          }
        />
        <FaqItem
          question={"HOW LONG DO YOU PLAY FOR?"}
          description={
            "Two sets equating to 2:15 hours, with a break in the middle."
          }
        />
      </section>
    </div>
  );
}
