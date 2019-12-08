import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from "./actions";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state && state.data);

  useEffect(() => {
    dispatch(requestApiData());
  }, []);

  const person = (x, i) => (
    <div key={x.id.value}>
      <h4>{x.gender}</h4>
      <h4>{x.name.first}</h4>
      <h4>{x.name.last}</h4>
      <img src={x.picture.medium} />
    </div>
  );

  const { results = [] } = data;
  return results.length ? <h1>{results.map(person)}</h1> : <h1>loading...</h1>;
};
export default Home;
