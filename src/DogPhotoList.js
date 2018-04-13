import React, { Component } from "react";
import DogPhoto from "./DogPhoto";
import NewPhotoForm from "./NewPhotoForm";

class DogPhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          src: "https://i.imgur.com/xyPtn4m.jpg",
          caption: "so sleeeeeepy"
        },
        {
          src: "https://i.ytimg.com/vi/oH_GHvcF9VM/hqdefault.jpg",
          caption: "how is this even a living creature?"
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDog) {
    this.setState(prevState => ({
      photos: [newDog, ...prevState.photos]
    }));
  }

  render() {
    let dogs = this.state.photos.map((photo, i) => (
      <DogPhoto key={i} src={photo.src} caption={photo.caption} />
    ));
    return (
      <div className="DogPhotoList">
        <h1>HERE ARE SOME AWESOME DOGS</h1>
        <NewPhotoForm handleAdd={this.handleAdd} />
        {dogs}
      </div>
    );
  }
}

export default DogPhotoList;
