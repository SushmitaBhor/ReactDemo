import React, { useState } from 'react';
import MyTable from '../src/table';
import '../src/index.css';
import FirstCard from './cards/card';
import CropPortraitOutlinedIcon from '@material-ui/icons/CropPortraitOutlined';
import List from '../src/List/List';
import SideButton from '../src/Button/Button';
import Badge from '../src/Badge';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <div>
        <Navbar>
          <Badge className="MuiBadge-anchorOriginTopRightRectangle" />

          <CropPortraitOutlinedIcon className="searchrec" />
          <NavSearchText search1="Search Project"></NavSearchText>
          <Image imagekeev />
          <NavText text="Angelena Doe"></NavText>
          {/* navtext will display username in navigation bar */}
          <NavImage />
          {/* navimage will display user image in navigation */}
          <NavItem />
          {/* NavItem will show list of rectangle icons imported above */}
          <NavItem />
          <NavItem />
          <NavItem />

          {/* Image will display keev logo */}
        </Navbar>
        <SideBar>
          <SideImage image />

          <SideText text="Angelena Doe" text1="Project Manager"></SideText>
        </SideBar>
        {/* SideText will display Username in sidebar */}
        <FirstCard onClick={() => setShowTable(!showTable)}></FirstCard>
        {showTable && <MyTable />}

        {/* card from card.js on click shows table from table.js currently setShowTable state is by default set to false onclick it will trigger onClick and change state to true */}
        <MyTitle />
        <MyIcon />
        <MyIconrec />
      </div>
      {toggle && <List />}

      <SideButton onClick={() => setToggle(!toggle)}></SideButton>
      {/* button from Button.js on click shows dropdownmenu from List.js currently seToggle state is by default set to false onclick it will trigger onClick and change state to true */}
    </div>
  );
}
function MyIcon(props) {
  return <div className="myDIVicon">{props.child}</div>;
}

function MyIconrec(props) {
  return <div className="myDIViconrec">{props.white}</div>;
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function SideBar(props) {
  return (
    <nav className="side-bar">
      <div className="sidebar-nav">{props.children}</div>
    </nav>
  );
}
function NavImage(props) {
  return (
    <a href="" className="image">
      {props.image}
    </a>
  );
}
function Image(props) {
  return (
    <a href="" className="image-keev">
      {/* image-keev is class included in index.css file */}
      blueBox
    </a>
  );
}

function SideImage(props) {
  return (
    <a href="" className="sideimage">
      {props.image}
    </a>
  );
}
function NavText(props) {
  return (
    <a href="" className="text">
      {props.text}
    </a>
  );
}
function NavSearchText(props) {
  return (
    <a href="" className="search">
      {props.search1}
    </a>
  );
}
function SideText(props) {
  return (
    <div>
      <a href="" id="sidetext">
        {props.text}
      </a>
      <a href="" id="sidetext1">
        {props.text1}
      </a>
    </div>
  );
}
function MyTitle(props) {
  return <div className="titleDash">Dashboard{props.titlea}</div>;
}

function NavItem() {
  return (
    <li className="nav-item">
      <CropPortraitOutlinedIcon />
    </li>
  );
}

export default App;
