// A way to add a player
// When we submit

// Props: onSubmit
import useForm from "../hooks/useForm";

export default function PlayerForm(props) {
  const initialValues = { name: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <button>Add new player</button>
    </form>
  );
}
