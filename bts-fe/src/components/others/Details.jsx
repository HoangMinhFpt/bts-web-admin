import React from "react";

const Details = (props) => {
  return (
    <React.Fragment>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <details>
        <summary>Even more details</summary>
        <p>Here are even more details about the details.</p>
      </details>
      <details>
        <summary>Even more details</summary>
        <p>Here are even more details about the details.</p>
      </details>
    </React.Fragment>
  );
};

export default Details;
