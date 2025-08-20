export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="h-4 w-4 bg-[#3b414d] rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}