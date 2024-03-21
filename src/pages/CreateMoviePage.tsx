import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContextProvider";

type Inputs = {
  name: string;
  rating: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const { createMovie } = useMovies();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createMovie(data).then(() => {
      navigate("/list");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name", { required: true })} />
      <input {...register("rating", { required: true })} />
      <input type="submit" value="send" />
    </form>
  );
}
