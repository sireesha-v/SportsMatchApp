import React from 'react';
import {Menu, Grid} from 'antd';
import styles from './PublicLandingPage/styles.module.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {useBreakpoint} = Grid;

const NavMenu = ({showRegModal}) => {
    const {md} = useBreakpoint()
    return (
        <Menu
			theme="dark" mode="horizontal"
            className={styles.menuWrapper}>
            <Menu.Item key="1" onClick={() => showRegModal(true)}>REGISTER</Menu.Item>
            <SubMenu
                key="sub2"
                icon={<span className = {
                styles.downArrowIcon
            } />}
                title="RULE BOOK">
                <Menu.Item key="7">CRICKET</Menu.Item>
                <Menu.Item key="8">FOOTBALL</Menu.Item>
                <Menu.Item key="9">VOLLEY BALL</Menu.Item>
                <Menu.Item key="10">SWIMMING</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">ABOUT</Menu.Item>
            <Menu.Item key="4">CONTACT US</Menu.Item>
        </Menu>
    );
}

export default NavMenu;