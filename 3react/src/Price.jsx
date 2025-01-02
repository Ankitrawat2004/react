export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
      textDecoration: "line-through",
      fontSize: "0.8rem", // Reduced font size
      marginRight: "5px", // Added spacing for better alignment
    };
    let newStyles = {
      fontWeight: "bold",
      fontSize: "1rem",
    };
    let styles = {
      backgroundColor: "#e8c367",
      padding: "10px 0", // Added padding for better spacing
      width: "100%", // Ensures full width within the box
      borderBottomLeftRadius: "14px",
      borderBottomRightRadius: "14px",
      display: "flex", // Align content horizontally
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box", // Prevents content overflow
    };
    return (
      <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        <span style={newStyles}>{newPrice}</span>
      </div>
    );
  }