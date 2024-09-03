import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleIcon from "../assets/google.png"; // Adjust path as necessary

function GoogleSignin() {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName?.split(" ")[0] || "", // Extract first name if available
          lastName: user.displayName?.split(" ")[1] || "", // Extract last name if available
          photo: user.photoURL || "",
        });
        toast.success("User logged in successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      toast.error("Failed to log in with Google", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <p className="continue-p">-- Or continue with --</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleIcon} alt="Sign in with Google" width={"60%"} />
      </div>
    </div>
  );
}

export default GoogleSignin;
