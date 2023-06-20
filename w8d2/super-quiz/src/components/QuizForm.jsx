import useForm from "../hooks/useForm";

export default function QuizForm(props) {
  const { questionText, onSubmit } = props;
  const initialValues = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <p>{questionText}</p>
        <input
          type="text"
          name="answer"
          placeholder="Enter the answer"
          onChange={handleChange}
          value={formData.answer}
        />
        <button>Submit answer</button>
      </form>
    </section>
  );
}
