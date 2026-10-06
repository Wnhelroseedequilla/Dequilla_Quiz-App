function AnswerOption({ choice, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(choice)}
      className={`w-full text-left p-4 mb-3 rounded-lg border transition ${
        selected
          ? "border-blue-600 bg-blue-50"
          : "border-gray-300 bg-white hover:bg-gray-100"
      }`}
    >
      {choice}
    </button>
  );
}

export default AnswerOption;