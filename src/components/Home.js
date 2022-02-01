import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import Login from "./Login";
import { selectUserName } from "../features/user/userSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const colRef = collection(db, "movies");

    onSnapshot(colRef, (snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  const userName = useSelector(selectUserName);

  return (
    <>
      {!userName ? (
        <Login />
      ) : (
        <>
          <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
