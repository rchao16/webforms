import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

const dummyData = {
  "forms": {
    "all": {
      "status": {
        "Triag": "Triag",
        "Pending More Information": "Pending More Information",
        "Jira|": "Jira",
        "Rejected": "Rejected",
        "Complete": "Complete"
      },
      "program_area": {
        "4-H": "4-H",
        "Community and Economic Development": "Community and Economic Development",
        "Illinois Nutritional Education Program": "Illinois Nutritional Education Program",
        "Family and Consumer Sciences": "Family and Consumer Sciences",
        "Agrictulture and Natural Resources": "Agrictulture and Natural Resources",
        "County Administration": "County Administration",
        "State Extension": "State Extension"
      },
      "offices": {
        "494": "Alexander/Johnson/Massac/Pulaski/Union Unit {494 - UM}",
        "481": "Adams/Brown/Hancock/Pike/Schuyler Unit {481 - UM}",
        "488": "Bond/Clinton/Jefferson/Marion/Washington Unit {488 - UM}"
      }
    }  
  }
}

export default class MenuExampleSubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIds: []
    }
  }

  //defines initial empty state
  // state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //hover over selectedid; adds the current option id (selected)
  // into the 'selectedIds' array at corresponding array index (depthLevel)
  handleSelectedId = (selected, depthLevel) => {
    return () => {
      //copies the array of selectedIds
      const updatedArray = this.state.selectedIds.slice(0)

      //updates the option at the selected index (depth level)
      updatedArray[depthLevel] = selected

      //updates the state with the new updated array
      this.setState({selectedIds : updatedArray})
    }
  }


  //recursive nested drilldown
  renderSubMenu = (options, depthLevel = 0) => {
    //creates array of options
    const menuOptions = options.map(option => {
      const display = (option.link
        ? <a href={ option.link }>{ option.text }</a>
        : <span>{ option.text }</span>
      ),

      //returns a boolean that checks if the options list has another list
      //might need to change this conditional 
      hasOptions = (options.options && option.options.length > 0);

      let subMenu;

      //only render selected submenu and only if nested options exist
      //if selected option matches the option at the indexed
      if ((this.state.selectedIds[depthLevel] === option.id) && hasOptions) {

        //increments the depth level to properly match the level of the submenu
        const newDepthLevel = depthLevel + 1;

        //calls the renderSubMenu with the selected option's option and incremented depthlevel
        subMenu = this.renderSubMenu(option.options, newDepthLevel);
      }

      return (
        <li 
          key={ option.id }
          onMouseEnter={
            this.handleSelectedId(option.id, depthLevel)
          }
        >
          { display }
          { subMenu }
        </li>
      );
    });

    return (
      <ul>
        { menuOptions }
      </ul>
    )
    
  }

  render() {
    console.log("state", this.state)
    console.log("dummy", dummyData);

    //creates new state called 'activeItem'
    const { activeItem } = this.state

    return (
      <Menu vertical>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
              Add
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Messages
        </Menu.Item>

        <Dropdown item text='More'>
          {/* <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
              <Dropdown item text='Even More!'>
                <Dropdown.Menu>
                  <Dropdown.Item icon='globe' text='World Dom' />
                </Dropdown.Menu>
              </Dropdown>
          </Dropdown.Menu> */}

          {/*
          Recursively iterate over the drilldown? Or let state handle it?
          */}
          
          <Dropdown.Menu>
            {Object.keys(dummyData).map(e => {
              if (Object.keys(e).length() > 0 ) {
                Object.keys(e).map(f => {
                  if (Object.keys(f).length() > 0 ) {
                    return(
                      <Dropdown text='MORAR'>
                        
                      </Dropdown>
                    )
                  }
                })
              }
              return (
                <Dropdown.Item text={e} />
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}