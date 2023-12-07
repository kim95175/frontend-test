"use client"
import styles from "./menuLink.module.css";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuLinkProps {
    item: {
        path: string;
        icon: React.ReactNode;
        title: string;
    };
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    );
}

export default MenuLink