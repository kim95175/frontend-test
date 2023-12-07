import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const singleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}> 
                    <Image src="/elsa.jpeg" alt="" fill />
                </div>
                Elsa 
            </div>
            <div className={styles.formContainer}> 
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Elsa" />
                    <label>email</label>
                    <input type="text" name="email" placeholder="elsa@pyler.tech" />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id ="isAdmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id ="isActive">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </form>
            </div>
        </div>
        
    )
}

export default singleUserPage