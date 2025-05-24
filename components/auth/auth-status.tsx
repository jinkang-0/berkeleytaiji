import { getEmail } from "@/api/auth";
import styles from "./auth-status.module.scss";
import ButtonLogout from "./button-logout";

export default async function AuthStatus() {
  const email = await getEmail();
  if (!email) return null;

  return (
    <div className={styles.statusBox}>
      <p>{email}</p>
      <ButtonLogout />
    </div>
  );
}
