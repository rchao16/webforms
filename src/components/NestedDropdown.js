// import React, { Component } from 'react'
// import { Dropdown, Icon, Menu } from 'semantic-ui-react'
//need to convert this json object into usable?
// const dummyData = {
//   "forms": {
//     "all": {
//       "status": {
//         "Triag": "Triag",
//         "Pending More Information": "Pending More Information",
//         "Jira|": "Jira",
//         "Rejected": "Rejected",
//         "Complete": "Complete"
//       },
//       "program_area": {
//         "4-H": "4-H",
//         "Community and Economic Development": "Community and Economic Development",
//         "Illinois Nutritional Education Program": "Illinois Nutritional Education Program",
//         "Family and Consumer Sciences": "Family and Consumer Sciences",
//         "Agrictulture and Natural Resources": "Agrictulture and Natural Resources",
//         "County Administration": "County Administration",
//         "State Extension": "State Extension"
//       },
//       "offices": {
//         "494": "Alexander/Johnson/Massac/Pulaski/Union Unit {494 - UM}",
//         "481": "Adams/Brown/Hancock/Pike/Schuyler Unit {481 - UM}",
//         "488": "Bond/Clinton/Jefferson/Marion/Washington Unit {488 - UM}"
//       }
//     }  
//   }
// }
// // formatted JSON object should be in this form.
// //can probably use Object.keys(object) to convert to array
// var item=[
//   {
//       name: '1',
//       child: []
//   },
//   {
//     name: '2',
//     child: [
//       {
//         name: '2.1',
//         child: [
//           {
//             name: '2.1.1',
//             child:[
//               {
//                 name: '2.1.1.1',
//                 child: [],
//               }
//             ]
//           }
//         ]
//       },
//       {
//         name: '2.2',
//         child: []
//       }
//     ]
//   }
// ];

// export default class MenuExampleSubMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

//   handleItemClick = (e, { name }) => {
//     this.setState({ activeItem: name })
//   }


//   //recursive dropdown menu
//   //needs to follow a certain format for response JSON object
//   _createDropdown = (item) => {
//     return item.map((elem, i) => {
//       return (
//         <Dropdown item text={elem.name} key={elem.name}>
//           <Dropdown.Menu key={elem.name}>
//             <Dropdown.Item text={elem.name} />
//             {elem.child.length ? this._createDropdown(elem.child) : null}
//           </Dropdown.Menu>
//         </Dropdown>
//       )
//     })
//   }

//   render() {

//     //creates new piece of state called 'activeItem'
//     const { activeItem } = this.state

//     return (
//       <Menu vertical>

//         <Menu.Item>
//           Home
//           <Menu.Menu>
//             <Menu.Item
//               name='search'
//               active={activeItem === 'search'}
//               onClick={this.handleItemClick}
//             >
//               Search
//             </Menu.Item>
//             <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
//               Add
//             </Menu.Item>
//             <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
//               Remove
//             </Menu.Item>
//           </Menu.Menu>
//         </Menu.Item>

//         <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
//           <Icon name='grid layout' />
//           Browse
//         </Menu.Item>
//         <Menu.Item
//           name='messages'
//           active={activeItem === 'messages'}
//           onClick={this.handleItemClick}
//         >
//           Messages
//         </Menu.Item>

//           {this._createDropdown(item)}
        
//       </Menu>
//     )
//   }
// }