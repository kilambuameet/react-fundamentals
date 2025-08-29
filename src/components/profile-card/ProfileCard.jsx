import React from "react";
import Avatar from "../avatar/Avatar";
import Button from "../custom-button/Button";
import Card from "../card/Card";

const ProfileCard = ({ image, buttonLabel = "Click Me", name, role, bio }) => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar image={image} />

        <div className="text-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-base font-medium">{role}</p>
          <span className="text-sm font-light">{bio}</span>
        </div>

        <Button title={buttonLabel} />
      </div>
    </Card>
  );
};

export default ProfileCard;
