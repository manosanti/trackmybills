import React from "react";
import styles from "./dashboard.module.css";

function page() {

  const name = 'Santiago';

  return (
    <div className={styles.dashboardContainer}>
      
      <div className={styles.leftPanel}>
        <div className={styles.pagesOption}>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
        </div>

        <div className={styles.settingsOption}>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
          <h2>aosk0oask</h2>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.userInfo}>
          <h2 id={styles.welcomeText}>Olá, {name}. Seja bem-vindo! 👋 </h2>
          <p id={styles.welcomeSubtext}>dakoskodsakopdkasopkopsakopsak</p>
          <div className={styles.balanceInAndOut}>
            <div>dasda9318939021i31290i</div>
            <div>dasdasd</div>
            <div className={styles.analytics}>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default page;
