const innerPageContainerStyle = {
  padding: "2rem 3rem",
};

function InnerPageContainer({ children }) {
  return <div style={innerPageContainerStyle}>{children}</div>;
}

export default InnerPageContainer;
