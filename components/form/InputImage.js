"use client";
import { cloneElement, useRef, useState } from "react";
import styles from "./inputImage.module.css";
import Image from "next/image";

function InputImage({ name, label, children, errors }) {
  const [imgUrl, setImgUrl] = useState("");
  const imgRef = useRef(null);

  function handleClick() {
    imgRef.current.click();
  }

  function handleChooseImg(e) {
    const file = imgRef.current.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    // this function will be trigger when reading dataURL done.
    fileReader.onload = (e) => {
      setImgUrl(e.target.result);
    };
    fileReader.readAsDataURL(file);
  }
  // console.log("imgURL", imgUrl);
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imgUrl && <p>No image picked yet</p>}
          {imgUrl && <Image src={imgUrl} fill alt="image-picked" />}
        </div>
        {cloneElement(children, { className: styles.none, ref: imgRef, onChange: handleChooseImg })}
        {errors && <span>{errors}</span>}
        {/* <input type="file" id={name} accept="image/*" name={name} className={styles.none} ref={imgRef} onChange={handleChooseImg} /> */}
        <button type="button" className={styles.button} onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default InputImage;
