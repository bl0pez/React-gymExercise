import React, { useContext } from "react";
import { BodyPart } from "./BodyPart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Grid, Typography } from "@mui/material";

import RightArrowIcon from "../../assets/icons/right-arrow.png";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import {
  useGetBodyPartsQuery,
  useGetExercisesQuery,
} from "../../store/api/exerciseApi";
import { useState } from "react";

export const HorizontalScrollbar = () => {

  const [bodyPart, setBodyPart] = useState("all")


  const { data } = useGetBodyPartsQuery();

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <Box>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data?.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            <BodyPart item={item} bodyPart={data} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};