# Router in React

Router in react used to travel from one page to another

## `<Router>`

At first import `import { BrowserRouter as Router, Switch, Route } from "react-router-dom";`
To use react router we need to decalare our pages or components inside a `<Router> </Router>` tag.

## `<Switch>`

Also we need to wrap them inside a `<Switch> </Switch>` to go one page at a time.

## `<Route>`

Then we need to declare `<Rounte path="user/login" exact component = {Component}>` to go to a page or component.
**Note: `exact is used to go exactly link as provided`**
Also we can declare it as like:
`<Route path="user/login" exact> <Component /> </Route>`
(This format is used to pass props to the component)

## Pass data with the URL

**Note: If we want to pass data to the component with the URL then we need to use the first declaration**
Example:
` <Route path="/shop/:id" exact component={ItemDetail} />`
Here `/:id` is to get the data. When we pass any data with the URL after 'shop/' then it will store as `id` in the component.
**Note: We can pass multiple data by giving `/:var` also we can pass optional parameter by giving**
**`/:var?`**

## Get data from the URL inside component

At first import `import { Link } from "react-router-dom";`
As like props the data comes with the URL store in `match` variable.
To get the data we need to decalare `match` inside component parameter.
Then need to call `match.params.var` to get the data.
We can also do:
`props.match.params.var`
**Note: The `match` is an object that holds all the data passed by URL**

# Access the component

To access the component we need to decalre:
`<Link to ="/path"> </Link>` or
`<a href="/path" </a>` to get the page or component.
