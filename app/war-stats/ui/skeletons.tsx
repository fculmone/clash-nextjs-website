import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function StatsSkeleton() {
  //flex flex-1 overflow-x-auto shadow-md sm:rounded-l xl:w-[1200px] lg:w-[1000px] w-screen
  return (
    <div className="h-screen w-screen max-h-[700px] max-w-[700px] aspect-square px-2 sm:px-4 md:px-8 items-center justify-center mb-32">
      <SkeletonTheme baseColor="#b9b9b9" highlightColor="#999999">
        <div className="text-center">
          <Skeleton className="mt-12 max-w-[300px]" height={40} />
        </div>
        <Skeleton className="aspect-square mt-14 " />
      </SkeletonTheme>
    </div>
  );
}
