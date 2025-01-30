"use client";
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styles from "./card.module.scss";
import Image from "next/image";

const FinestCard = ({ data }) => {
  return (
    <div
      className={`${styles.finest_card} card`} 
    >
      <div className={`${styles.finest_big_img} large-img`}>
        {data?.map((item, i) => {
          return (
            <figure key={i}>
              <Image src={item?.bigImage} fill alt="image" />
            </figure>
          );
        })}
      </div>
      <div className={styles.finest_contents}>
        {data?.map((item, i) => {
          return (
            <div className={`${styles.contents} contents`} key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className={`${styles.finest_small_img} small-img`}>
        {data?.map((item, i) => {
          return (
            <figure key={i}>
              <Image src={item?.smallImage} fill alt="image" />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default FinestCard;