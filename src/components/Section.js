import React from "react";
import "./../styles/Section.css";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, fields } = this.props;

    return (
      <div className='section'>
        <h1>{title}</h1>
        {fields.map((field, i) => (
          <div>
            <label htmlFor='a'>Hi</label>
            {field}
          </div>
        ))}
      </div>
    );
  }
}

export default Section;
