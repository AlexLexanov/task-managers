const FlowSetting: Array<string> = [
  "backlog",
  "in expectation",
  "work",
  "test",
  "deploy",
  "performed",
];

export const ProjectByIdPage = () => {
  return (
    <div className="flex flex-col w-full md:flex-row h-[calc(100vh_-_100px)]">
      {FlowSetting.map((item, index) => (
        <div key={index} className="h-full mx-1 bg-slate-100 text-center">
          {item}
          <div className="h-full snap-y overflow-y-auto hide-scroll">
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card snap-start bg-red-500 h-48 m-2 shadow-xl">
              <div className="card snap-start-body">
                <h2 className="card snap-start-title">card snap-start title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card snap-start-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
