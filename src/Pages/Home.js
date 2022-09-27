import React from "react";
import BasicTable from "../components/foTable/foTable";
import ResponsiveAppBar from "../components/Header/header";
import SimpleAccordion from "../components/monthlyCollectionPerformance/monthlyCollectionPerformance";

const Home = () => {
return (
	<div>
	<ResponsiveAppBar />
	<br/>
	<SimpleAccordion />
	<br/>
	<BasicTable />
	</div>
);
};

export default Home;
