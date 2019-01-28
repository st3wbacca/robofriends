import React from 'react';

const SearchBox = ({ searchChange }) => {
	console.log('SearchBox');
	return (
		<div className='pa2'>
			<input
				aria-label='Search Robots'
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='searchrobots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;