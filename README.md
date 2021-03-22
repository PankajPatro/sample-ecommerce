# Sample eCommerce

Learning is great and everyone should always keep learning. People in technology must keep doing the same for survival, I am no different. In my quest to learn technologies I keep reading articles, going through videos and have debates with friends and colleagues. This is my attempt to give back to the world of internet a tiny bit.

Anybody in the technology world who has been visiting websites would have certainly come across terms Single Page Application (SPA), Progressive Web Apps (PWA) etc. If you would have delved down you would have known most of these are one of these HTML + JavaScript, HTML + Flutter, HTML + Web Assembly etc.

As a professional Software Engineer my role is to build a full tech solution and in recent times have been found working hands on the front-end technologies. The most popular technologies in this space are React, Angular, Vue.js not in any order. I wanted to experiment with these technologies not with any intention to compare them but with an intention that if you have a business problem any chosen technology can solve problem and choosing a technology should be a more involved process than just a popular vs non popular choice. Few of the parameters should be

- Support both Paid &amp; Community
- Availability of Developers
- Able to Unit Test and Automate thus reducing regression cycles.
- Upgrade Path

This experiment I did in the process of learning was choose these three technologies and would like to take you all along with the journey I took.

I chose the below 3 front end technologies and the rationale behind the same.

1. Angular: It was an easy choice as most of my projects I build are Angular + C#
2. Blazor: Coming from Microsoft Background, I guessed I could use this to experiment WebAssembly
3. React: Could not get away from this as it changes a paradigm shift in the way .Net developers think of binding, so it was my choice to understand this binding of data.
4. Flutter: Being a new language it involved a learning curve; thus, I have kept this out of this and would upload another just for flutter.

**The Use Case (Problem Statement)**

During learning we all go through number of videos and go through multiple code examples. What we find is solutions for a single problem and most of the tutorials shows #Todo examples. Having worked in the industry for the last 15 years and on multiple projects which generally are mostly enterprise applications have understood one thing, the way we work in the actual code base and the to-do examples are different. The examples are too simplistic and most of the times does not cover the dilemma of what a developer face.

While most of the developer would need to find answer to this one question

&quot;Is there a pattern which I can confirm is working for me which I can keep replicating?&quot; I too tried to answer the same and chose the below problem as an example for my experiment

A Very Simple Ecommerce Application:

_Acceptance Criteria:_

- The user on opening the application should be able to view a set of products which he can add to the cart.
- The product should have some description and an image for the user to help him choose the product.
- The user should be able to open the cart and checkout the products.
- The user should also be allowed to filter from the list of products.

My Approach

To generalize the solution here is what the approach I took.

- On opening the application, the user will be presented with a home page.
- The home page would call a service which would provide it with a list of products which the home page would display. The home page as a side effect would save the list of products to the browsers session storage for easy retrieval of data.
- On the home page the user should have a search bar which he can use to filter through the list of products.
- Each product should have button which would allow the product to be added to the cart.
- The home page should have a button which should allow the user to navigate to the cart.
- The cart should show all the products added along with the quantities added.
- The item should be able to be removed from the cart.
- The cart should have a button to checkout.

To keep the UI consistent, I had the option of choosing either Bootstrap or Material Design. I chose Material design as I had prior experience of the same.

**The Solution**

| Topic | Blazor | Angular | React |
| --- | --- | --- | --- |
| UI | MatBlazor | Angular Material | Material UI |
| Unit Testing | BUnit | Jasmine | Jest |
| Codebase | [https://github.com/PankajPatro/sample-ecommerce/tree/main/blazor/SampleECommerce](https://github.com/PankajPatro/sample-ecommerce/tree/main/blazor/SampleECommerce) | [https://github.com/PankajPatro/sample-ecommerce/tree/main/angular/SampleECommerce](https://github.com/PankajPatro/sample-ecommerce/tree/main/angular/SampleECommerce) | [https://github.com/PankajPatro/sample-ecommerce/tree/main/react/sample-ecommerce](https://github.com/PankajPatro/sample-ecommerce/tree/main/react/sample-ecommerce) |
| Explanation |
- Razor is the page bootstrapped.
- Razor decides the page layout.
- The AppBar has 3 components
  - A Title component which on click navigates to the home page
  - A Search text box which calls a service to filter the data on Home page
  - A Cart Button showing the cart count and on click takes to the Cart
- The Index.Razor on load calls the service &quot;ItemData&quot;and on receiving the data stores them in session storage
- The Cart.Razor shows the items in the cart.
- ItemDataState &amp; CartState are the two way binding which binds the UI and the Index, Global Search, Cart
 |
- component.html is the page bootstrapped.
- The navigation is responsible for helping the user to filter the data on the home page and navigate from cart page to home page.
- The home is responsible to load the items
- The cart component is responsible for showing the items in the cart.
- There are two services which are responsible for all the actions in the app. When home page loads it calls the data to be loaded to store. The current application uses akita([https://github.com/datorama/akita](https://github.com/datorama/akita)) as its state management choice. All the data is queried through this store.
 |
- tsx is the page that is bootstrapped.
- tsx is responsible for helping the user to filter the data on the home page and help in navigation.
- The Home.tsx page is responsible to load the items.
- The Cart.tsx page is responsible to show the items in the cart.
- The application uses react-redux state management to manage the data. When home page loads(mounts) it dispatches the load method. On data loaded the filter method is dispatched with blank filter which then loads the items to the page.
 |
| Conclusion | Blazor really looks promising and has a potential of being a production ready application, however I guess the open community support for it needs a bit more attention for having more components available for the business consumers. | Angular no doubt was my preferred choice simply because coming from the world of two way binding it seems so at home experience. The community support is also great and Angular being a more opinionated library would help small organisations lacking an architect to bring in the discipline of choosing the right packages for building enterprise solutions. | React is a different beast altogether, the community support and the change of paradigm shift makes this library a best bet in delivering modern day Single Page application, however it being so open ended needs an architect to flesh out the architecture, choosing libraries and defining the pattern before the developers start writing their code as chances are people with no great knowledge on the tech stack can end up building a spaghetti code. |

**Other Frameworks Worth Considering**

Vue.js definitely is a framework I would like to evaluate. Coming from the generation of Angular.js I believe the learning curve would not be that high. Will have to extend this project in future to include vue.js too.

**ScreenShots**

Blazor

Angular

React

NOTE : I can be reached at [patro.pankaj@gmail.com](mailto:patro.pankaj@gmail.com). Please do reach out to me with your comments and feedback.
