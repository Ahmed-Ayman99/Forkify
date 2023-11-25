import MainNav from './MainNav';
import MainForm from './MainForm';

const Header = () => {
  return (
    <header className="flex items-center justify-between col-span-full bg-greylight1">
      <img alt="logo" className="ml-10 h-[46px] block" src="./logo.png" />
      <MainForm />
      <MainNav />
    </header>
  );
};

export default Header;
