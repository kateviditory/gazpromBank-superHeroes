import React, { Component } from "react";
import Media from "react-media";
import { app320, app375, app767 } from "./templates.jsx";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <Media query="(max-width: 375px)">
              {matches =>
                matches ? (
                  <Media query="(max-width: 320px)">
                    {matches =>
                      matches
                        ? app320() // Меньше 320px
                        : app320() // От 320px (включительно) до 375px (не включая). Макет для 320px
                    }
                  </Media>
                ) : (
                  app375() // От 375px (включительно) до 767px (не включая). Макет для 375px
                )
              }
            </Media>
          ) : (
            app767() // Больше или равно 767px. Макет для 767px
          )
        }
      </Media>
    );
  }
}
