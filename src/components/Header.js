import React, {useState} from "react";
import styled from "styled-components";

const Header = (props) => {
	const [isActive, setIsActive] = useState("top")
	return (
		<HeaderCon>
			<Img src="https://news.ycombinator.com/y18.gif" alt="y-combinator logo" />
			<H6>Hacker News</H6>
			<MenuList>
				<ListItem onClick={()=>{props.onCallNews('newstories'); setIsActive('new')}} active={isActive == 'new'}>new</ListItem>
				<ListItem onClick={()=>{props.onCallNews('topstories'); setIsActive('top')}} active={isActive == 'top'}>top</ListItem>
				<ListItem onClick={()=>{props.onCallNews('askstories'); setIsActive('ask')}} active={isActive == 'ask'}>ask</ListItem>
				<ListItem onClick={()=>{props.onCallNews('showstories'); setIsActive('show')}} active={isActive == 'show'}>show</ListItem>
				<ListItem onClick={()=>{props.onCallNews('jobstories'); setIsActive('job')}} active={isActive == 'job'}>job</ListItem>
			</MenuList>
		</HeaderCon>
	);
};
const HeaderCon = styled.div`
	background-color: #ff6600;
	display: flex;
	align-items: center;
	font-size: 16px;
	padding:0 2px;
`;
const Img = styled.img`
border:1px solid #fff;
`
const H6 = styled.h6`
font-size: 16px;
font-weight: bold;
margin: 0;
padding:0 2px;
`
const MenuList = styled.ul`
display:flex;
list-style: none;
padding:0;
margin: 5px 0;
`
const ListItem = styled.li`
border-right:1px solid #000;
padding:0 10px;
margin: 0;
color:${props => props.active ? "#fff" : '#000'};
cursor:pointer;
`
export default Header;
