const fullContainerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function FullContainer({ children }) {
  return <div style={fullContainerStyle}>{children}</div>;
}

export default FullContainer;
