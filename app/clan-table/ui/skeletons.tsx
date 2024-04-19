import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function TableSkeleton() {
  //flex flex-1 overflow-x-auto shadow-md sm:rounded-l xl:w-[1200px] lg:w-[1000px] w-screen
  return (
    <div className="xl:w-[1200px] lg:w-[1000px] w-screen bg-gray-200 border-2 border-solid border-gray-400 h-96 py-2 px-4 rounded-lg mt-12">
      <SkeletonTheme baseColor="#b9b9b9" highlightColor="#999999">
        <Skeleton className="mt-2 mb-2" height={60} />
        <Skeleton className="my-1" height={40} />
        <Skeleton className="my-1" height={40} />
        <Skeleton className="my-1" height={40} />
        <Skeleton className="my-1" height={40} />
        <Skeleton className="my-1" height={40} />
        <Skeleton className="my-1" height={40} />
      </SkeletonTheme>
    </div>
  );
}
