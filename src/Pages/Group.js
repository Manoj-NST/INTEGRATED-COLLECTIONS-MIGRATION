import * as React from 'react';
import ResponsiveAppBar from '../components/Header/header';
import GroupTable from '../components/groupTable/groupTable';

export default function GroupDetails() {
  return (
    <div>
	<ResponsiveAppBar />
	<br/>
	<GroupTable />
	</div>
  );
}