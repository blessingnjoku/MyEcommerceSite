import React from "react";
import "./Home.css";
import Products from "./Products";

function HomePage() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://unsplash.com/photos/_3Q3tsJ01nc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8fHwxNjU0Nzc4Nzg5&force=true"
          className="hero_img"
        />
        {/* <img
          src="https://unsplash.com/photos/P3pI6xzovu0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTd8fGVjb21tZXJjZXxlbnwwfHx8fDE2NTQ3ODA1NzA&force=true"
          alt="big-img"
        /> */}
        <div className="home_rows">
          <Products
            id=""
            title="life is powerful"
            price={19.9}
            image="https://unsplash.com/photos/8sQDW8FvSZs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU0ODA0MjQ3&force=true"
            rating={4}
          />
          <Products
            title="life is powerful"
            price={39.9}
            image="https://unsplash.com/photos/8-9DjH7Cp9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTJ8fHJlZCUyMHdpbmUlMjBib3R0bGV8ZW58MHx8fHwxNjU0ODA3MjQ2&force=true"
            rating={3}
          />
        </div>
        <div className="home_rows">
          <Products
            title="life is powerful"
            price={39.9}
            image="https://unsplash.com/photos/8-9DjH7Cp9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTJ8fHJlZCUyMHdpbmUlMjBib3R0bGV8ZW58MHx8fHwxNjU0ODA3MjQ2&force=true"
            rating={5}
          />
          <Products
            title="life is powerful"
            price={39.9}
            image="https://unsplash.com/photos/8-9DjH7Cp9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTJ8fHJlZCUyMHdpbmUlMjBib3R0bGV8ZW58MHx8fHwxNjU0ODA3MjQ2&force=true"
            rating={3}
          />
          <Products
            title="life is powerful"
            price={39.9}
            image="https://unsplash.com/photos/8-9DjH7Cp9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTJ8fHJlZCUyMHdpbmUlMjBib3R0bGV8ZW58MHx8fHwxNjU0ODA3MjQ2&force=true"
            rating={3}
          />
        </div>
        <div className="home_rows">
          <Products
            title="life is powerful"
            price={39.9}
            image="https://unsplash.com/photos/8-9DjH7Cp9Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OTJ8fHJlZCUyMHdpbmUlMjBib3R0bGV8ZW58MHx8fHwxNjU0ODA3MjQ2&force=true"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
