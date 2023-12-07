import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Datae</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image 
                            src="/elsa.jpeg" alt="" 
                            width={30} height={30} 
                            className={styles.userImage}
                            />
                            Elsa
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <Image 
                            src="/anna1.jpeg" alt="" 
                            width={30} height={30} 
                            className={styles.userImage}
                            />
                            Anna 1
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <Image 
                            src="/anna2.jpeg" alt="" 
                            width={30} height={30} 
                            className={styles.userImage}
                            />
                            Anna 2
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <Image 
                            src="/olaf.jpeg" alt="" 
                            width={30} height={30} 
                            className={styles.userImage}
                            />
                            Olaf
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions
    