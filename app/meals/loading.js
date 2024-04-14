import styles from "./loading.module.css";
import Image from "next/image";
import loadingImg from "@/public/loading.svg";

function Loading() {
  return (
    <div className={styles.loading}>
      <Image src={loadingImg} alt="loading" />
    </div>
  );
}

export default Loading;
