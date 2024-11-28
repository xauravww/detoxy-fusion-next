export default function Loading() {
    return (
      <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white">
        <div className="hidden md:block sidebar w-[16rem] h-screen bg-white dark:bg-black p-2">
          <div className="mt-8">
            {/* Shimmer Effect for Sidebar Items */}
           
              
             {Array.from({length:5}).map((_,index)=>{
              return (
           <div className=" bg-gray-200 w-full mb-1 rounded-md h-8 animate-pulse shimmer flex p-1 gap-1 items-center" key={index}>
                 <div className="text-black ml-1 w-4 h-5 bg-gray-300 rounded-md"></div>
                 <div className="text-black w-10 h-5 bg-gray-300 rounded-md"></div>
           </div>
              )
             })}
            
         
          </div>
        </div>
      </div>
    );
  }
  