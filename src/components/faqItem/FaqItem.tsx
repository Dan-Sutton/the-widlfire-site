"use client";

import React, { useState } from "react";
import styles from "./faqItem.module.css";

type Props = {
  question: string;
  description: string;
};

export default function FaqItem({ question, description }: Props) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.faq}>
      <div className={styles.questionRow}>
        <h2>{question}</h2>
        <p>+</p>
      </div>
      {/* <div>{expanded ? <p>{description}</p> : <>MEHH</>}</div> */}
    </div>
  );
}
