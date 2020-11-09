import React, { useState, useEffect } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false, term = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const Search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  useEffect(() => {
    if (term) {
      setInput(term);
    }
  }, []);

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            type="submit"
            variant="outlined"
            onClick={Search}
            disabled={!input}
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button
            type="submit"
            variant="outlined"
            onClick={Search}
            disabled={!input}
          >
            Google Search
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
