export default function PageHeader({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-gray-500 mb-8">
      {children}
    </h1>
  );
}
