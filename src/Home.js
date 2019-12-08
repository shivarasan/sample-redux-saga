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
      <h1>{x.gender}</h1>
      <h1>{x.name.first}</h1>
      <h1>{x.name.last}</h1>
      <img src={x.picture.medium} />
    </div>
  );

  const { results = [] } = data;
  return results.length ? <h1>{results.map(person)}</h1> : <h1>loading...</h1>;
};
export default Home;
