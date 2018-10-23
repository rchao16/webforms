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
  //defines initial empty state
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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