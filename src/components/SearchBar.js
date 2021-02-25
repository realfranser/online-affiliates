export const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    margin: "0 auto",
    width: "375px",
    height: "45px",
    "border-radius": "30px",
    border: "1px solid #dcdcdc",
    outline: "none",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      //no tocar ni formatear placeholder, está puesto así para centrarlo
      placeholder="                                  
       
        enter creator code"
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};
