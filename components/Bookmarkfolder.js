export default function Bookmarkfolder() {
  return (
    <section className="mx-6 mb-3">
      <button className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <svg
            width={22}
            height={20}
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8L10 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V17Z"
              stroke="#A44AFF"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-left ml-5">
            <div className="text-white font-medium">My Favorite</div>
            <div className="text-gray-400 text-xs font-medium">5 Items</div>
          </div>
        </div>
        <svg
          width={23}
          height={24}
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5614 13C12.0878 13 12.5146 12.5523 12.5146 12C12.5146 11.4477 12.0878 11 11.5614 11C11.0349 11 10.6082 11.4477 10.6082 12C10.6082 12.5523 11.0349 13 11.5614 13Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5614 6C12.0878 6 12.5146 5.55228 12.5146 5C12.5146 4.44772 12.0878 4 11.5614 4C11.0349 4 10.6082 4.44772 10.6082 5C10.6082 5.55228 11.0349 6 11.5614 6Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5614 20C12.0878 20 12.5146 19.5523 12.5146 19C12.5146 18.4477 12.0878 18 11.5614 18C11.0349 18 10.6082 18.4477 10.6082 19C10.6082 19.5523 11.0349 20 11.5614 20Z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
