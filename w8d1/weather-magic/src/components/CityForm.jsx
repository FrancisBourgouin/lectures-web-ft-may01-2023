import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const { onSubmit } = props;
  const initialValues = { city: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section className="CityForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter the city name"
          value={formData.city}
          onChange={handleChange}
        />
        <button>Fetch weather!</button>
      </form>
    </section>
  );
}
