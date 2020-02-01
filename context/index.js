import React, { createContext, useState } from 'react';

const Context = createContext({});

// class Provider extends React.Component {
//   state = {
//     simpleResult: {},
//     updateData: this.handleUpdateData.bind(this)
//   }

//   handleUpdateData(data) {
//     this.setState({
//       simpleResult: data
//     });
//   }

//   render() {
//     return (
//       <Context.Provider value={{
//         simpleResult,
//         updateData
//       }}>
//         {children}
//       </Context.Provider>
//     );
//   }
// }

const Provider = ({ children }) => {
  const [simpleResult, updateData] = useState({});

  console.log('context, ', simpleResult);
  return (
    <Context.Provider value={{
      simpleResult,
      updateData
    }}>
      {children}
    </Context.Provider>
  );
};

export {
  Context,
  Provider
}
