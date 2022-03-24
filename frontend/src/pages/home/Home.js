import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import classes from "./home.module.css";

export default function Homepage() {
  // const { estate, error, loading } = useFetch(
  //   "http://localhost:1337/api/estates?populate=*"
  // );
  const {
    isLoading,
    error,
    data: estate,
    isFetching,
  } = useQuery("estates", () =>
    axios
      .get("http://localhost:1337/api/estates?populate=*")
      .then((res) => res.data)
  );

  if (isLoading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  console.log(estate);

  return (
    <div className={classes["home"]}>
      <section>
        <h2>Welcome to our Estate</h2>
        <hr className={classes["horizontal-rule"]} />
        <p>We help you find your new home</p>

        <form className={classes["home-form"]}>
          <h5>Interested in joining our Newsletter</h5>
          <h6>Sign up with your email below</h6>

          <label htmlFor="email">
            Email Address:
            <input type="email" />
          </label>
          <button>Signup</button>
        </form>
        {estate?.data.length > 0 &&
          estate?.data?.map(({ id, attributes }) => (
            <article className={classes["home-article"]} key={id}>
              <h2>{attributes.name}</h2>
              <section className={classes["home-article-description"]}>
                <img
                  src={`http://localhost:1337${attributes?.image?.data?.attributes?.url}`}
                  alt="img"
                  style={{ width: "60%", height: "" }}
                />
                <div>
                  <p>{attributes.price}</p>
                  <p>{attributes.description}</p>
                  <Link to={`estates/${id}`}>See More...</Link>
                </div>
              </section>
            </article>
          ))}
      </section>
    </div>
  );
}
