import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

  const cars = useSelector(selectCars);
  // console.log(cars);

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Logo>
        <a href='#'>
          <img src='./images/logo.svg' alt='tesla logo' />
        </a>
      </Logo>

      <Menu>
        {(cars && cars.map((car, index) => (
          <a href={car.id} key={index}>{car.name}</a>
        )))}
      </Menu>

      <RightMenu>
        <a href='#/'>Shop</a>
        <a href='#/'>Tesla Acount</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus} >
        <CustomClose onClick={() => setBurgerStatus(false)} />
        {(cars && cars.map((car, index) => (
          <li key={index}><a href={car.id}>{car.name}</a></li>
        )))}
        <li><a href="#Accessories">Existing Inventory</a></li>
        <li><a href="#Accessories">Used Inventory</a></li>
        <li><a href="#Accessories">Trade-in</a></li>
        <li><a href="#/">Cyber Truck</a></li>
        <li><a href="#/">Roadster</a></li>
        <li><a href="#/">Semi</a></li>
        <li><a href="#/">Charging</a></li>
        <li><a href="#/">Powerwall</a></li>
        <li><a href="#/">Comercial Energy</a></li>
        <li><a href="#/">Utilities</a></li>
        <li><a href="#/">Test Drive</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`
const Logo = styled.div`

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap:no-wrap;
  margin: 0 20px;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media(max-width: 768px) {
    display:none;
  }

`
const RightMenu = styled.div`

  display: flex;
  align-items: center;
  
  a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  }
  
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;


`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  background-color: white;
  z-index: 101;
  width: 300px;
  padding: 20px;
  display: flex; 
  flex-direction: column;
  text-align: start;
  overflow-y: scroll;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, 0.2);

    a{
      font-weight: 600;
    }
  }
`


const CustomClose = styled(ClearIcon)`
  align-self: flex-end;
  cursor: pointer;
`