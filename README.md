# Super Spooky Shudder Shuffle Selection System
## A Halloween-themed project

[Live Prototype](https://ehighland.github.io/halloweensite/)

### Background

I love horror movies. Horror is my favorite genre. That is why I have been a subscriber to AMC Network’s streaming service Shudder since it was in beta: it’s essentially the Netflix of horror movies. Shudder has a good selection and sometimes I have trouble deciding on a movie. That gave me an idea: make a list of movies, shuffle it, and watch whatever the result is. 


To spice things up, I decided to customize the idea to Halloween. Although this project was just for fun, I did consider potential users. First, I needed to make sure this project was understandable to these potential users. 


### Introduction via splash page

I cannot assume users are familiar with the streaming service Shudder. For those users, “Shudder shuffle” has no discernable meaning. For this reason, I made a splash page with an overview of the purpose of the site. I designed it to have good contrast without being too hard on the eyes. Rather than using a black background, I am using a dark gray. I did not want to use too much white, also to reduce any eye strain. Leaning on my Halloween-theme, I used orange. A very bright and more yellow orange would not be much better than white, so I went for a slightly more brown orange. I also designed a goofy logo. The phrasing "Super Spooky Shudder Shuffle Selection System" appears twice, both in the paragraph (in bold) and in the logo. My goal is to reinforce the name to the user, which I think is aided by having a visual representation as well as a textual representation.


### Primary feature (Shudder shuffle)

Once the user has entered at their own risk (as described by the splash page), they will see a very straightforward page. Since the primary purpose of the site is to shuffle a movie list, I made it very clear how to do so. Beneath the large text "CLICK THIS" is a "button" that says "Shuffle". To the right of these, there is large text "WATCH THIS" and a "button" where the recommendation appears. I am placing "button" in scare quotes because it is not an HTML button. I am simply using a div, but I modeled it on a button because the idea of a clickable button is very familiar to a user. I implemented the shuffle feature with JavaScript. As soon as the user clicks, the suggestion appears. Thus, the user quickly gets feedback on from their action.


Because the primary feature is the shuffle, this page is first after the splash. I made sure the page did not have a lot of clutter so this primary feature would be easy and intuitive. Another method I am using to ensure a good experience for the user is a consistent aesthetic. Most text is green (also fitting the Halloween-themed color set). If I want to draw a user's eye, I use orange. I use this for the navbar and header and also for links. If text is less important but I still want to set it apart, I use purple. The text in purple always has a distinct purpose, but ought not be the main focus. For example, it is used in the splash page beacuse the main text to read is the description. The underline on "Enter at Your Own Risk" signals a link to the user, so I did not choose to provide additional cues. 


I chose to separate areas of the page with thin and rounded borders around important page elements. The header is in a border, the navigation links are in borders. The shuffle button has the same sort of border, as does the area where the selection appears. When the user hovers over the navigation elements, the background color changes to match the header. When the user also hovers over the text, it changes to the other text color used in the header (which is also the background color). This is a way to engage the user and maintain consistency.

### Additional features

I did also include other features. I imagined that a user might want to read reviews of the movies on the list or that the user might want curated recommendations that were not on the list. I have no expertise as a film reviewer, but I tried to write a couple of reviews to flesh out the page. This helped me pin down my desired layout, which is shared by the "Reviews" and "Recommendations" pages. In keeping with the rest of the site, thin and rounded borders are used to separate different areas of text (header, navigation, main body). To prevent a disproportionately long "Reviews" page, I set up the content to scroll. Here, purple text is also used for supporting information. Although it's helpful to have text that breaks down the specific parts of the review, that text is not the main focus so it is in purple. The main text in both "Reviews" and "Recommendations" is green, consistent with the rest of the site. The links in both are in orange. This is also consistent, as I use orange to draw attention.


### Conclusion

I had a lot of fun with this site, but it is still a prototype rather than a finished product. That said, I think the concept is strong and would be interesting and engaging to users.





