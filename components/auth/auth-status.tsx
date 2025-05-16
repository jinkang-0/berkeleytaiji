import { getSession } from "@/api/auth";
import styles from "./auth-status.module.scss";
import ButtonLogout from "./button-logout";

export default async function AuthStatus() {
  const session = await getSession();
  const user = session.success && session.user;

  if (!user) {
    return null;
  }

  return (
    <div className={styles.statusBox}>
      <p>{user.email}</p>
      <ButtonLogout />
    </div>
  );
}
