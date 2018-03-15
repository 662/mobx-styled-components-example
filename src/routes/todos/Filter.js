import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FilterBox = styled.div`
    
`

export default () => (
  <div>
    <Link to="todos/all">all</Link>
    <Link to="todos/active">active</Link>
    <Link to="todos/completed">completed</Link>
  </div>
);
