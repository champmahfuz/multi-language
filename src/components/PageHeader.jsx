import React from "react";
import Search from "./Search";
import TopMenu from "./TopMenu";
import LangNav from "./LangNav";

const PageHeader = (props) => {
  return (
    <div className="page-hdr">
      <Search langName={props.langName} />
      <LangNav langName={props.langName} />
      <TopMenu langName={props.langName} />
    </div>
  );
};

export default PageHeader;
