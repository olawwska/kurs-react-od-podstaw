import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";

const initialStateItems = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Malevich.black-square.jpg",
        name: "Dan Abramov",
        twitterLink: "https://twitter.com/dan_abramov",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Malevich.black-square.jpg",
        name: "Ryan Florence",
        description:
            "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
        twitterLink: "https://twitter.com/ryanflorence",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Malevich.black-square.jpg",
        name: "Michael Jackson",
        description:
            "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
        twitterLink: "https://twitter.com/mjackson",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Malevich.black-square.jpg",
        name: "Kent C. Dodds",
        description:
            "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
        twitterLink: "https://twitter.com/kentcdodds",
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    };

    addItem = (event) => {
        event.preventDefault();
        this.setState({
            items: [initialStateItems, ...event.target.value],
        });
    };

    render() {
        return (
            <>
                <ListWrapper items={this.state.items} />
                <Form submitFn={this.addItem} />
            </>
        );
    }
}

export default App;
