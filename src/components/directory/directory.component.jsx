import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Vigilancia",
          imageUrl: "https://i.ibb.co/yQtnGtV/05042012010.jpg",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "Seducción",
          imageUrl: "https://i.ibb.co/hL8hV2V/30052012056.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Seriedad",
          imageUrl: "https://i.ibb.co/dJjWsfX/06042012018.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "Atención",
          imageUrl: "https://i.ibb.co/dJjWsfX/06042012018.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Atención",
          imageUrl: "https://i.ibb.co/LrvYx8x/tyson.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
