import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit } = props;
  const initialValues = { question: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Enter the question"
          onChange={handleChange}
          value={formData.question}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter the answer"
          onChange={handleChange}
          value={formData.answer}
        />
        <button>Add question</button>
      </form>
    </section>
  );
}
