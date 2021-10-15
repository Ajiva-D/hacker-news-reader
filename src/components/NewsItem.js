import React, { useEffect, useState } from "react";
import styled from "styled-components";
const NewsItem = (props) => {
	const [article, setArticle] = useState({});
	const fetchItem = async () => {
		let baseUrl = "https://hacker-news.firebaseio.com/v0/";
		let res = await fetch(`${baseUrl}item/${props?.id}.json?print=pretty`);
		let data = await res.json();
		setArticle(data);
	};
	useEffect(() => {
		fetchItem();
	}, []);

	const convertTime = (time) => {
		var date = new Date(time * 1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();
		let qty = hours > 1 ? 'hours' : 'hour'
		return `${hours} ${qty} ago`;
	};
	return (
		<div>
			<div style={FlexStyle}>
				<UpVoteIcon src="https://news.ycombinator.com/grayarrow2x.gif" alt="upvote" />
				<Link href={article.url}>
					<Title>{article?.title}</Title>
				</Link>
			</div>
			<div style={{ ...FlexStyle, marginLeft: "18px" }}>
				<SubText>{article?.score} points by</SubText>
				<SubText>{article?.by}</SubText>
				<SubText>{convertTime(article.time)}</SubText>
			</div>
		</div>
	);
};
const FlexStyle = { display: "flex", alignItems: "center" };

const Title = styled.h5`
	font-weight: 500;
	font-size: 14px;
	margin: 0;
	color: #000;
`;
const SubText = styled.p`
	font-size: 12px;
	margin: 0 2px;
`;
const Link = styled.a`
	font-size: 12px;
	color: #828282;
	margin: 0 2px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;
const UpVoteIcon = styled.img`
	object-fit: contain;
	height: 15px;
	align-self: flex-start;
`;

export default NewsItem;
