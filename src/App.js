import React, {useState} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import allownums from "./components/allow";

// const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://jahanvi:<ja12345>@dragndrop.twlyw.mongodb.net/test', {
//     useUnifiedTopology : true,
//     useNewUrlParser : true,
// }).then[console.log('Connected to mongo db!')]

// var itemsSchema = new mongoose.Schema({
//     id: String, 
//  });
// var Item = mongoose.model('Item', itemsSchema);

// const connectToDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://jahanvi:<ja12345>@dragndrop.twlyw.mongodb.net/test', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.error(err.message);
//     //exit process with failure
//     process.exit(1);
//   }
// };

// connectToDB();

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <allownums/>
        <DragDrop />
      </div>
    </DndProvider>
  );
}
  
export default App;
