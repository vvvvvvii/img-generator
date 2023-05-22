const fullContainer = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function FullContainer({ children }) {
  return <div style={fullContainer}>{children}</div>;
}

export default FullContainer;
