import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

const Breadcrumb = ({ pageName, description, detailPage, url }) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-semibold text-black sm:text-3xl">
                {detailPage ? detailPage : pageName}
              </h1>
              <p className="font-medium leading-relaxed text-text">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center gap-1 pr-1 font-medium text-text group"
                  >
                    <TechIcon
                      name="home"
                      className="w-5 h-5 text-text group-hover:text-pink-400"
                    />
                    <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-violet-500">
                      Home
                    </span>
                  </Link>

                  <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-text"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    to={url}
                    className={`pr-1 font-medium ${
                      detailPage
                        ? "hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-500 hover:text-transparent"
                        : "bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500 text-transparent"
                    }`}
                  >
                    {pageName}
                  </Link>
                  {detailPage && (
                    <span className="mx-2 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-text"></span>
                  )}
                </li>
                {detailPage && (
                  <li className="text-base font-medium bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500 text-transparent whitespace-nowrap">
                    {detailPage}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
