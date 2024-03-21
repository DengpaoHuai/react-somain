import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
