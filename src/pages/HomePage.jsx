import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.HomePage}>
      <div className={s.content}>
        <div className={s.text}>
          <h1>Welcome to the Phonebook! </h1>
          <p>
            Manage your contacts easily and securely with our simple and
            intuitive app.
          </p>
          <ul>
            <p>You can:</p>
            <li>Log in to access your contacts. </li>
            <li>Add new contacts with just a few clicks.</li>
            <li>Search for any contact quickly and efficiently.</li>
          </ul>
          <p>Best of all, it's completely FREE!</p>
          <p>
            Get started today and keep your contacts organized at your
            fingertips..
          </p>
        </div>

        <div>
          <img
            src={"../../public/hand.png"}
            alt="phone in hand"
            className={s.homePageImg}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
