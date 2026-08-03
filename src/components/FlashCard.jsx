export default function FlashCard({ titulo, bg, texto }) {
  return (
    <div className={`${bg} rounded-xl p-5 shadow-sm`}>
      <h3 className="font-extrabold text-gray-900 mb-2">{titulo}</h3>
      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{texto}</p>
    </div>
  );
}
