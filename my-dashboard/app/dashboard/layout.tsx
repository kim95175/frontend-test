import React, { ReactNode } from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";
import styles from "../ui/dashboard/dashboard.module.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />  
            </div>
        </div>
    );
};

export default Layout;

