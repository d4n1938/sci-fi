import { useUpdateEffect } from "usehooks-ts";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>title</li>
          <li>hamburger</li>
        </ul>
      </nav>
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../../styles/functions.scss";

        nav {
          @include flex-center("", 80px);

          background-color: red;
          ul {
            @include flex-center();
            display: flex;
            justify-content: space-between;

            li {
              color: white;
              font-size: 3rem;
              margin: 20px;
            }
          }
        }
      `}</style>
    </>
  );
};
export default Navigation;
