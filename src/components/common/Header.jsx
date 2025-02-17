import '../../assets/css/layout.css'

const Header = () => {
    return (
        <header>
            <h1><a href="#home">JIYEON</a></h1>
            <div className="gnb">
                <ul>
                    <li><a href={'#home'}>HOME</a></li>
                    <li><a href={'#work'}>WORKS</a></li>
                    <li><a href={'#about'}>ABOUT</a></li>
                    <li><a href={'#contact'}>CONTACT</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;