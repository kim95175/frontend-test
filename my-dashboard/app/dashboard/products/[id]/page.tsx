import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const singleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}> 
                    <Image src="/olaf.jpeg" alt="" fill />
                </div>
                Elsa 
            </div>
            <div className={styles.formContainer}> 
                <form action="" className={styles.form}>
                    <input type="hidden" name="id" placeholder="1234" />
                    <label>Title</label>
                    <input type="text" name="title" placeholder="olaf" />
                    <label>Decription</label>
                    <input type="text" name="description" placeholder="Snowman" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$3" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="2" />

                    <button>Update</button>
                </form>
            </div>
        </div>
        
    )
}

export default singleProductPage