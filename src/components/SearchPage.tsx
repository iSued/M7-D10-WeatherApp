import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { searchCity } from "../store/city/actions";

const SearchPage = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      dispatch(searchCity({ city: e.target.value }));
    }
  };

  return (
    <div>
      <h1>{city}</h1>

          <TextField
            className="textField"
            id="outlined-basic"
            label="Search by city"
            variant="outlined"
            value={city}
            onKeyDown={handleEnter}
            onChange={handleChange}
          />
      
          <Button variant="contained" color="primary">
            Search
          </Button>

    </div>
  );
};
export default SearchPage;
