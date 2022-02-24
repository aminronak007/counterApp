import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementNumber,
  decrementNumber,
  changeFontColour,
} from "./redux/actions/index";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

function App() {
  const myState = useSelector((state) => state.changeNumberValue);
  const fontColor = useSelector((state) => state.changeFontColor);

  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [colorPicker, setColorPicker] = useState(false);

  return (
    <div className="app">
      <div
        style={{ paddingBottom: "340px" }}
        className="container text-center pt-5"
      >
        <div className="row bg-light">
          <h1 className="text-primary"> React Counter App</h1>
          <h4 className="text-decoration-underline text-secondary">
            using React & Redux
          </h4>
        </div>
        <div className="row text-center pt-5">
          <div className="col-md-12">
            <button
              style={{
                marginRight: "10px",
                backgroundColor: "gray",
                color: "white",
                fontWeight: "bolder",
                width: "40px",
              }}
              className="btn"
              onClick={() => dispatch(decrementNumber(5))}
            >
              -
            </button>
            <span style={{ color: fontColor, fontWeight: "bolder" }}>
              {myState}
            </span>
            <button
              style={{
                marginLeft: "10px",
                backgroundColor: "gray",
                color: "white",
                fontWeight: "bolder",
                width: "40px",
              }}
              className="btn"
              onClick={() => dispatch(incrementNumber(5))}
            >
              +
            </button>
            {colorPicker ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "20px",
                  }}
                >
                  <HexColorPicker color={color} onChange={setColor} />
                </div>

                <button
                  onClick={() => {
                    dispatch(changeFontColour(color));
                    setColorPicker(false);
                  }}
                  className="btn btn-success"
                >
                  Apply Colour
                </button>
              </>
            ) : null}

            {!colorPicker ? (
              <button
                onClick={() => setColorPicker(true)}
                className="btn btn-secondary"
                style={{ marginLeft: "10px" }}
              >
                Change Counter Colour
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
