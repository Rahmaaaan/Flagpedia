import React from "react";
import Entry from "./Entry";
import Footer from "./Footer";
import flagpedia from "../flagpedia";

function createEntry(flags) {
  return (
    <Entry
      key={flags.unicode}
      emoji={flags.emoji}
      name={flags.name}
      unicode={flags.unicode}
      dialCode={flags.dialCode}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>flagpedia</span>
      </h1>

      <dl className="dictionary">{flagpedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
