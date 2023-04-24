# React Alerts Messages

The Alert component is a reusable component for displaying messages to the user. It accepts two props: alertMessage and alertType. The alertMessage prop is a string that contains the message to be displayed, while the alertType prop is a string that specifies the type of alert to be displayed (such as "success", "warning", "info", etc.). The component applies appropriate CSS styles based on the alertType prop to give the message an appropriate visual appearance. The component can be used in a variety of contexts, such as form submissions, authentication flows, error handling, and more. By using this component, developers can provide consistent and visually appealing messages to their users, enhancing the overall user experience of their React applications.

# Installation

To use 'react-alerts-messages ' in your React application, simply install it via npm:

```bash
npm install react-alerts-messages
```

Then, import the Alert component and pass the required props to display an alert:

```bash

import React from 'react';
import Alert from 'react-alerts-messages';

const MyComponent = () => {
  return (
    <div>
      <Alert alertMessage="This is a success alert" alertType="success" />
      <Alert alertMessage="This is a danger alert" alertType="danger" />
    </div>
  );
};

export default MyComponent;

```

For a full list of available props, see the Props section below.

# Props

The Alert component takes two props:

alertMessage: The message to be displayed in the alert.

alertType: The type of alert to be displayed, which can be one of the following:

* success
* danger
* warning
* info
* primary
* secondary
* light
* dark

You can customize the appearance of the alerts by modifying the CSS styles for each alert type.

# Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

# License 

react-alerts-messages is open source software licensed as MIT. Feel free to use, share, and modify it as you wish.