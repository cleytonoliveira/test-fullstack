export function Skeleton() {
  function renderSkeleton() {
    return Array.from({ length: 4 }).map((_, index) => (
      <article
        key={index}
        className="flex flex-wrap border-2 py-6 sm:py-3 px-10 sm:px-3 items-center justify-between sm:justify-around break-words"
      >
        <div className="w-[25%] sm:w-[39%] space-y-2">
          <div className="w-72 sm:w-28 h-4 bg-gray-300 rounded-full animate-pulse"></div>
          <p className="w-72 sm:w-28 h-4 bg-gray-300 rounded-full animate-pulse"></p>
        </div>
        <div className="w-[25%] sm:w-[39%] space-y-2">
          <p className="w-72 sm:w-28 h-4 bg-gray-300 rounded-full animate-pulse"></p>
          <p className="w-72 sm:w-28 h-4 bg-gray-300 rounded-full animate-pulse"></p>
        </div>
        <span className="flex flex-row w-[25%] sm:w-[22%] flex-wrap sm:justify-center">
          <p className="w-72 sm:w-28 h-6 bg-gray-300 rounded-full animate-pulse"></p>
        </span>
        <div className="w-72 sm:w-28 sm:mt-3 h-8 bg-gray-300 rounded-full animate-pulse"></div>
      </article>
    ));
  }
  return <div className="space-y-6 animate-pulse">{renderSkeleton()}</div>;
}
