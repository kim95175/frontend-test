import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from "react-icons/md"
const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/elsa_anna.jpg" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Avaiable Now</span>
                    <h3>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        어쩌구 저쩌구
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch Now
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/elsa_anna2.jpg" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Avaiable Now</span>
                    <h3>Olaf's Frozen Adventure</h3>
                    <span className={styles.subtitle}>Takes 60 minutes to watch</span>
                    <p className={styles.desc}>
                        어쩌구 저쩌구
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
    