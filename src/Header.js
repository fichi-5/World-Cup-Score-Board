import React from 'react';

const Header = (props) => (
    <header className="top">
        <h1 className="tagline">
            {props.tagline}
        </h1>
    </header>
);

export default Header;