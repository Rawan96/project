import React from "react";
import moment from "moment";
import { Card } from "antd";
const { Meta } = Card;

const CardComponent = (props) => {
  const { title, img, description, date, authorName } = props;
  return (
    <div className="card">
      <Card
        hoverable
        style={{ width: 900 }}
        cover={<img alt="card__img" src={img} />}
      >
        <Meta title="Title:" description={title} />
        <br />
        <Meta title="Description:" description={description} />
        <br />
        <Meta title="Author:" description={authorName} />
        <br />
        <Meta title="Posted On:" title={moment(date).format("LLLL")} />
      </Card>
    </div>
  );
};
export default CardComponent;
