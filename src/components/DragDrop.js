import React, { Component, useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
        {
            id: 1,
            url: "https://t3.ftcdn.net/jpg/01/79/43/16/240_F_179431675_ieoxNIhD5xlBYTw04hZZAMUlgj5PwOIV.jpg",
        },
        {
            id: 2,
            url: "https://t4.ftcdn.net/jpg/01/79/43/17/240_F_179431746_MxaP9vr6xI7fcqdnqry6flcPhb8FzYDC.jpg"
        },
        {
            id: 3,
            url: "https://t3.ftcdn.net/jpg/01/79/43/16/240_F_179431672_uxwkqtTpLvRnS3poVzwlBB26TvR2wDag.jpg"
        },
        {
            id: 4,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHvmD4mVqKItxaqSDWayTFKFt6W0Eu-hZuRz43aZzeEBaFqRYnwq5cECJilPHt_K9Zhk&usqp=CAU"
        },
        {
            id: 5,
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEACAMAAAA0tEJxAAAAclBMVEX///8AAACqqqqTk5Pz8/P29vZpaWna2tpMTEynp6fk5OTf399zc3PQ0NBhYWGtra1+fn4kJCTKysrDw8Oamprt7e0bGxuhoaG/v79FRUU7OzuOjo6IiIiYmJh/f3+0tLQvLy8UFBQLCwtaWlpwcHA1NTV+GDTZAAACjUlEQVR4nO3bi04iQRCFYVpFQATktoAoeOP9X3GZ0dWB6emaxGS7Dvm/J6iTAHWx7XQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAWs/4qdwm/NvgTwlXuIn7nbhcK0inm/RDUU6zeQhBPMXwIFZop1psQxFN0F+GcXIrefS2DXIr1YySDVoqb62gEqRS926YMOin2L80ZRFIst6kIGilGYyNDCJPcNVomUzPDwzB3kWnLJzPC1PunafZuZrgd5S7SUGw/hueb3EWmfW0/Kf157iIN39tPs6e73EWmdSvbT4PDPneRhmFsZD1138tdpOF8+6l7XXVzF5kW2X7OjWe5izT0PswM18vcRRr28e2nYrPOXaOhefv55n1U6owS288n96OSsf0U3I9K5vYTwsL5qNRi+3E/KrXYfryPSi22H/ej0pH1fXA/KpWSDcL9qPRPIsW791HpR2OKrfdRqSqewv2odCaWYud9VKqppdgI/LDW1FK8qPwuVcU+URo9oir+7Vbo11WX/EtbGntfJ34kJxD/q90Xa9HeeR/KP42so77/BalkrxgLjRYyeDVyiLQQ88T/qNFCTl8IxWy9X0FK9pFZpIWYB3+RFmJfzDVaiH1yFmkh5s32TaOF2EdPjRZiH6BFWsjEfHSgsYXYD0A0Woj9gmLq/k1UaWA+QdBoIXPzb/gaLaTFewqJQ1aLBwkaLaThPXPFQSJH6kFwaZC7wnaMWVFjcC+kZkWdFKnzj1KK5vOPVoqjq9isKJei+FfJS0hxnBXPzz+SKYrnqpeQonM6K+qmqP67mHKK4wfr+RJSHO0Pl5CinBVFpsG0pcRkDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4v/4CPJYZ/mKqSWgAAAAASUVORK5CYII="
        },
    ];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
// export default allownums;
