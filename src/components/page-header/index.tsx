import React from "react";
import { Link } from "react-router-dom";
import "./pageheader.css";

type Props = {
  name: string;
  link: string;
  parent_link?: string;
  image: string;
};

export default function PageHeader(props: Props) {
  return (
    <section
      className="page-header bm"
      style={{ background: `url(${props.image})` }}
    >
      <h2>{props.name}</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.parent_link && (
          <li>
            <Link to={`${props.parent_link}`}>{props.parent_link}</Link>
          </li>
        )}
        <li>
          <Link to={`/${props.link}`}>{props.name}</Link>
        </li>
      </ul>
    </section>
  );
}

