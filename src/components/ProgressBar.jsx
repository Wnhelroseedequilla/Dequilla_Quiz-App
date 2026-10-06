export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
      <div
        className="bg-blue-600 h-3 rounded-full transition-all"
        style={{ width: '${progress}%' }}
      />
      <p className="text-sm text-gray-500 mt-1">Question {current} of {total}</p>
    </div>
  );
}